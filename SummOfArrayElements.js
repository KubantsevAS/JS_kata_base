function arrayPlusArray(arr1, arr2) {             // функция для сложения массивов разной длины поэлементно
  var summ = [];
  if (arr1.length < arr2.length){                 // условие, чтобы приравнять длину массивов друг к другу
  	while (arr1.length != arr2.length){
    arr1.push(0);
    }
  }
  else {
  	while (arr2.length != arr1.length){
    arr2.push(0);
    }
  }
  for (let i = 0; i < arr1.length & i < arr2.length; i++){      // сложение элементов между собой
    summ[i] = arr1[i] + arr2[i];
  }
  return summ; 
}
alert(arrayPlusArray([1, 2, 3, 3, 3], [1, 2, 3]));            // пример вызова функции
