//Скопирован ли массив?
//Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); // ?
//Ответ:4, тк обе переменные ссылаются на один объект


/*-----------------------------------
 Операции с массивами
важность: 5
Давайте произведём 5 операций с массивом.
    Создайте массив styles с элементами «Джаз» и «Блюз».
    Добавьте «Рок-н-ролл» в конец.
    Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
    Удалите первый элемент массива и покажите его.
    Вставьте «Рэп» и «Регги» в начало массива.
*/
location.reload()
let styles = ['Jazz','Blues'];
console.log(styles.toString())
styles.push('Rock-n-roll')
console.log(styles.toString())
let middle=Math.floor((styles.length)/2)
//console.log(middle)
styles.splice(middle,1,'Classic')
console.log(styles.toString())
console.log(styles.shift())
console.log(styles.toString())
styles.unshift('Rap','Raggy')
console.log(styles.toString())

/*--------------------------------
 Вызов в контексте массива
важность: 5

Каков результат? Почему? */
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ?
//Ответ: записываем в конец массива элемент функцию которая вызывает alert которая
//по this передает сам массив и выводит на экран. 
//При обращении к последнему элементу массива данная функция выполняется

/* -------------------------------
Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:
    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */
function sumInput() {
  let arr=[]
  let sum=0
  while (true) {
    let answer = prompt('Please enter number:')
    if (answer !== null &&
      answer !== '' && !isNaN(answer)) {
      arr.push(+answer)
      console.log(answer)
    }else
      break;
  }
	for(let a of arr){
    sum+= +a
    console.log(sum)
  }
  return sum;
}
alert('Sum: '+sumInput())




