var arr = [ 5, 6, 3, -3, 1];
var min = arr[0];
		for (let i = 0; i < arr.length; i++){
				if (min > arr[i]) { 
     		min = arr[i]
     		}
    }
console.log(min); // Выводим минимальное значение из массива

// Добавляем функции на поиск мин и макс значения

var min = function(list){
    for (let i = 0; i < list.length; i++){
      if (list [0] >= list[i]){
      list [0] = list [i];
      }
    }
    return list[0];
}

var max = function(list){
      for (let i = 0; i < list.length; i++){
        if (list [0] <= list[i]){
        list [0] = list [i];
        }
    }
    return list[0];
}