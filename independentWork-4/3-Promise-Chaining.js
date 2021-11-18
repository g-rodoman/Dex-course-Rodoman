/* Промисы: сравните then и catch
Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя 
одинаково во всех обстоятельствах, для всех переданных им обработчиков?
promise.then(f1).catch(f2);
Против:
promise.then(f1, f2); */

//Ответ: нет не являются, в первом случае ответ или ошибка передастся по цепочке в блок catch,
// а во втором случае не передастся, т.к. цепочки нет
