/* Обязателен ли "else"?
важность: 4
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта? 

Ответ:Будет работать также*/

/* Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
    Используя оператор ?
    Используя оператор ||
 */
 function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

/* Функция min(a, b)
важность: 1
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */
function min(a, b) {
  return a < b ? a : b;
}
min(2, 5) //== 2
min(3, -1) //== -1
min(1, 1) //== 1 

/* Функция pow(x,n)
важность: 4
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n). 
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.*/
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("Введите x:");
let n = prompt("Введите n:");
console.log( pow(x, n) );
