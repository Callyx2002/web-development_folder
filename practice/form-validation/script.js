const registrationForm = document.getElementById("registrationForm");
const errorMessages = document.getElementById("errorMessages");
let radioButtons;
const singers = ["adele", "sza", "taylorSwift"];
errorMessages.innerHTML = singers
  .map(
    (e) =>
      `
<div>
  <label for="${e}">${e}</label>
  <input type="radio" id="${e}" name="singer" value="${e}" />
</div>
`
  )
  .join(" ");

radioButtons = document.querySelectorAll(`input[name="singer"]`);
for (const radioButton of radioButtons) {
  radioButton.addEventListener("change", showChecked);
}
function showChecked() {
  if (this.checked) {
    // alert(this.value);
    errorMessages.innerHTML += `<p>You selected ${this.value}</p>`;
  }
}
