'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat, lng]
    this.distance = distance; //km
    this.duration = duration; //min
  }
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////
//APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let layerArray = [];
let holderWorkout = [];
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    //get user position
    this._getPosition();

    //get data from local storage
    this._getLocalStorage();

    //attacjh event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your current position');
        }
      );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    // console.log(
    //   `https://www.google.com/maps/@${latitude},${longitude},10z?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D`
    // );
    const coords = [latitude, longitude];

    //displays the map and returns the map object
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    //   console.log(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //adds a marker to the map
    /*
      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
        */

    //add an onclick event to the map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _hideForm() {
    //clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    e.preventDefault();
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    console.log('todo');
    const { lat, lng } = this.#mapEvent.latlng;
    const newCoords = [lat, lng];
    let workout;

    //if workout is running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //check if valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive number');

      workout = new Running(newCoords, distance, duration, cadence);
    }

    //if workout is cycling, create cycling objects
    if (type === 'cycling') {
      //check if valid
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive number');

      workout = new Cycling(newCoords, distance, duration, elevation);
    }

    //add the new object to the workout array
    this.#workouts.push(workout);

    //render workout on map as a mrarker
    this._renderWorkoutMarker(workout);

    //render workout on list
    this._renderWorkout(workout);

    //hide the form
    this._hideForm();

    //set local storage to all workout
    this._setLocalStorage();
  }
  _newEditedWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    e.preventDefault();
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const newCoords = holderWorkout[1].coords;
    let workout;

    //if workout is running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      //check if valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive number');

      workout = new Running(newCoords, distance, duration, cadence);
    }

    //if workout is cycling, create cycling objects
    if (type === 'cycling') {
      //check if valid
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive number');

      workout = new Cycling(newCoords, distance, duration, elevation);
    }

    console.log('working');
    //add the new object to the workout array
    this.#workouts.push(workout);

    //render workout on map as a mrarker
    this._renderWorkoutMarker(workout);

    //render workout on list
    this._renderWorkout(workout);

    //hide the form
    this._hideForm();

    //set local storage to all workout
    this._setLocalStorage();
    form.removeEventListener('submit', this._newEditedWorkout);
    form.addEventListener('submit', this._newWorkout);
  }

  _renderWorkoutMarker(workout) {
    layerArray.push(
      L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
          })
        )
        .setPopupContent(
          `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
        )
        .openPopup()
    );
  }
  _removeWorkoutMarker(index) {
    this.#map.removeLayer(layerArray[index]);
  }
  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <div class="workout__title">
        <h2 >${workout.description}</h2>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="edit">
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="delete">
            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>
      </div>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>`;

    if (workout.type === 'running')
      html += `
         <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;

    if (workout.type === 'cycling')
      html += `
         <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    //delete a workouot
    if (e.target.closest('svg')?.classList.contains('delete')) {
      const workout = this.#workouts.find(
        work => work.id === workoutEl.dataset.id
      );
      const deleteIndex = this._deleteWorkout(workout);
      this._removeWorkoutMarker(deleteIndex);
      this._setLocalStorage();
      return;
    }

    //edit a workout
    if (e.target.closest('svg')?.classList.contains('edit')) {
      const workout = this.#workouts.find(
        work => work.id === workoutEl.dataset.id
      );
      this._editWorkout(workout);
      return;
    }

    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // //using the public interfae
    // workout.click();
  }
  _editWorkout(workout) {
    form.removeEventListener('submit', this._newWorkout);
    form.addEventListener('submit', this._newEditedWorkout);
    const deleteElem = Array.from(containerWorkouts.children).filter(
      elem => elem.dataset.id === workout.id
    )[0];

    // find the index of the workout
    const deleteIndex = this.#workouts.findIndex(elem => elem === workout);
    holderWorkout = [deleteIndex, workout];
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _deleteWorkout(workout) {
    const deleteElem = Array.from(containerWorkouts.children).filter(
      elem => elem.dataset.id === workout.id
    )[0];

    //find the index of the workout
    const deleteIndex = this.#workouts.findIndex(elem => elem === workout);

    //remove the element at the index in the workout array and the dom
    this.#workouts.splice(deleteIndex, 1);
    containerWorkouts.removeChild(deleteElem);
    layerArray.splice(deleteIndex, 1);

    return deleteIndex;
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

//event listener to detect elevation value or cadence
