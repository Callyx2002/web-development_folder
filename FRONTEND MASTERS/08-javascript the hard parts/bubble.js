// program to implement the bubble sort algorithm......😂😂took me some time to implement it .... lol
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let temp = array[j];
      if (temp > array[j + 1]) {
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
