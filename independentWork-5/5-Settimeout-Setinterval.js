/* Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
    Используя setInterval.
    Используя рекурсивный setTimeout. */
function printNumbers(from, to) {
  let num = from;
  let timerId = setInterval(()=>{
    console.log(num);
    if (num == to) {
      clearInterval(timerId);
    }
    num++;
  }, 1000);
}
printNumbers(10, 15);

function printNumbers(from, to) {
  let num = from;
  setTimeout(function tick() {
    console.log(num);
    if (num < to) {
      setTimeout(tick, 1000);
    }
    num++;
  }, 1000);
}
printNumbers(1000, 1500);

/* Что покажет setTimeout?
важность: 5
В приведённом ниже коде запланирован вызов setTimeout, 
а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
Когда будет выполнена запланированная функция?
    После цикла.
    Перед циклом.
    В начале цикла.
Что покажет alert?
let i = 0;
setTimeout(() => alert(i), 100); // ?
// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++; */
Ответ: Будет i=100000000, т.к. setTimout попадет в очередь колбеков и event loop 
переместит его в стек, только когда весь остальной код выполнится

