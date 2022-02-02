function arrayPlusArray(arr1, arr2) {  // функция для сложения массивов
  var summ = 0;
  for (let i = 0; i < arr1.length; i++){
    summ += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++){
    summ += arr2[i];
  }
  return summ; 
}

function positiveSum(arr) {		// функция для сложения положительных элементов массива
  var summPos = 0;
  for ( let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      summPos += arr[i];
    }
  }
  return summPos
}