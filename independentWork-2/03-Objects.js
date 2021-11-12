/* Привет, object
важность: 5
Напишите код, выполнив задание из каждого пункта отдельной строкой:
    Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта. */
location.reload()
let user={}
console.log( user ); 
user.name='John'
console.log( user ); 
user.surname='Smith'
console.log( user ); 
user.name='Pete'
console.log( user ); 
delete user.name
console.log( user ); 

/* Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */
location.reload()
function isEmpty(obj){
  let result=true
  for(let key in obj)
    result=false
  return result
}
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete";
//Ответ: Будет работать, т.к. нельзя менять сам объект, а его свойства менять можно

/* Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0. */
location.reload()
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum=0
for (let value of Object.values(salaries))
	sum+=value
console.log( sum ); 

/* Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое. */
location.reload()
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
console.log( menu ); 