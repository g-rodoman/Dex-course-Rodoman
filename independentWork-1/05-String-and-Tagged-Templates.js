// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым сим-волом. Например:
// ucFirst("вася") == "Вася";
//
// Ответ:
    function ucFirst(str){
        str=str[0].toUpperCase()+str.slice(1)
        return str
    }
ucFirst("вася")

// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//     Функция должна быть нечувствительна к регистру:
//     checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
//
// Ответ:
    function checkSpam(str){
        str=str.toLowerCase();
        return str.includes('viagra') || str.includes('xxx') ;
    }
console.log(checkSpam('buy ViAgRA now') )
console.log(checkSpam('free xxxxx') )
console.log(checkSpam("innocent rabbit") )

// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//     Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"
//
// Ответ:
    function truncate(str, maxlength) {
        if (str.length > maxlength) {
            return str.substr(0, maxlength - 1) + '…'
        }
        return str
    }
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
//"Вот, что мне хотело…"
truncate("Всем привет!", 20) //= "Всем привет!"

// Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//     Например:
// alert( extractCurrencyValue('$120') === 120 ); // true
//
// Ответ:
    function extractCurrencyValue(str) {
        str = +str.slice(1)
        return str
    }
extractCurrencyValue('$120') //=== 120

// Теговые шаблоны
var person = 'Mike';
var age = 28;
function myTag(strings, personExp, ageExp) {
    var str0 = strings[0]; // "That "
    var str1 = strings[1]; // " is a "
    var ageStr;
    if (ageExp > 99){
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }
    return `${str0}${personExp}${str1}${ageStr}`;
}
var output = myTag`That ${ person } is a ${ age }`;
console.log(output);
// That Mike is a youngster


function template(strings, ...keys) {
    return (function(...values) {
        var dict = values[values.length - 1] || {};
        var result = [strings[0]];
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}
var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});  // "Hello World!"


