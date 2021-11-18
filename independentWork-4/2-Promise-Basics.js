/* Можно ли "перевыполнить" промис?
Что выведет код ниже?
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});
promise.then(alert); */
//Ответ:Выполнится первый resolve, второй проигнорируется

/* Задержка на промисах
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
так чтобы мы могли добавить к нему .then:
function delay(ms) {
  // ваш код
}
delay(3000).then(() => alert('выполнилось через 3 секунды')); */
function delay(ms){
  return new Promise(function(resolve,reject){
     setTimeout(()=>resolve('done'),ms)
  })
}
delay(3000).then(()=>alert('выполнилось через 3 сек'))