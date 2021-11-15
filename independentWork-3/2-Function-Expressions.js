function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); 
//------------------
let age = prompt("Сколько Вам лет?", 18);
// в зависимости от условия объявляем функцию
if (age < 18) {
  function welcome() {
    alert("Привет!");
  }
} else {
  function welcome() {
    alert("Здравствуйте!");
  }
}
// ...не работает
welcome(); // Error: welcome is not defined
let age = 16; // присвоим для примера 16
if (age < 18) {
  welcome();               // \   (выполнится)
                           //  |
  function welcome() {     //  |
    alert("Привет!");      //  |  Function Declaration доступно
  }                        //  |  во всём блоке кода, в котором объявлено
                           //  |
  welcome();               // /   (выполнится)
} else {
  function welcome() {
    alert("Здравствуйте!");
  }
}
// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.
welcome(); // Ошибка: welcome is not defined