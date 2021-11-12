/* Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода 
Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
Например:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert( sumSalaries(salaries) ); // 650 */
location.reload()
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function sumSalaries(salaries){
  let sum=0
  for(let value of Object.values(salaries))
    sum+=value
  return sum
}
console.log( sumSalaries(salaries) ); // 650

/* Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
  name: 'John',
  age: 30
};
alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные». */
location.reload()
let user = {
  name: 'John',
  age: 30
};
function count(obj){
  let count=0
  Object.values(obj).map(key=>key!=null&&key!=undefined?count++:count)
  return count
}
console.log( count(user) ); // 2
