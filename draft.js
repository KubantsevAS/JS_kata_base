function arrayPlusArray(arr1, arr2) {  // функция для сложения массивов
  var summ = [];
  if (arr1.length < arr2.length){   //условие, чтобы заполнить пробелы нулями
  	for (var delta = arr2.length - arr1.length; delta == 0; delta--){
  	arr1.push('0');
  	}
  }
  else {
  	for (var delta = arr1.length - arr2.length; delta == 0; delta--){
  	arr2.push('0');
  	}
  }
  for (let i = 0; i < arr1.length & i < arr2.length; i++){
    summ[i] = arr1[i] + arr2[i];
  }
  return summ; 
}
alert(arrayPlusArray([1, 2, 5, 4], [1, 4, 6, 9, 6]));
