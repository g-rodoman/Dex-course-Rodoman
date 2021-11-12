/* Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
потом переделайте всё как нужно и методом join соедините обратно. */
location.reload()
function camelize(str) {
  let array = str.split('-')
  for (let i = 1; i < array.length; i++) {
    array[i] =
      array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  let result = array.join('')
  console.log(result)
  return result
}
camelize("background-color") // == 'backgroundColor';
camelize("list-style-image") // == 'listStyleImage';
camelize("-webkit-transition") // == 'WebkitTransition';

/* Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.
Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений) */
location.reload()
function filterRange(arr,a,b){
  let myArr=arr.slice()
  return myArr.filter(item=>item>=a&&item<=b)
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered.toString() ); // 3,1 (совпадающие значения)
console.log( arr.toString() ); // 5,3,8,1 (без изменений)

/* Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и 
удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1] */
location.reload()
function filterRangeInPlace(arr,a,b){
 arr.map((item,index)=>(item>=a && item<=b)?
                     					item:
                     					arr.splice(index,1))
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log( arr.toString() ); //[3, 1]

/* Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10
 */
location.reload()
let arr = [5, 2, 1, -10, 8];
arr.sort().reverse()
console.log( arr.toString() ); // 8, 5, 2, 1, -10

/* Скопировать и отсортировать массив
важность: 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) */
location.reload()
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log( sorted.toString() ); // CSS, HTML, JavaScript
console.log( arr.toString() ); // HTML, JavaScript, CSS (без изменений)