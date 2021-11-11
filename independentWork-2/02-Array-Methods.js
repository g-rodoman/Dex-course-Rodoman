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