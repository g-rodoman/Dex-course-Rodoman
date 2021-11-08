// Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//     Для вывода используйте alert.
//     Ответ:
let date= new Date(2012,1,20,3,12)
alert(date)

// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// Например:
//     let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
//
// Ответ:
    function getWeekDay(d){
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
        return days[d.getDay()]
    }
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"

// День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
//     let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2
//
// Ответ:
    function getLocalDay(d){
        let day=d.getDay()
        if(day==0){
            return 7
        }
        return day
    }
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2

// Какой день месяца был много дней назад?
//     Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
//     К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девят-надцатое и getDateAgo(new Date(), 2) – восемнадцатое.
//     Функция должна надёжно работать при значении days=365 и больших значениях:
//     let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.
//     Ответ:
function getDateAgo(date, days) {
    let d=new Date(date)
    d.setDate(d.getDate() - days);
    return d.getDate();
}
let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// Последнее число месяца?
//     Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
//     •	year – год из четырёх цифр, например, 2012.
// •	month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
// Ответ:
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }
getLastDayOfMonth(2012, 1) //= 29 (високосный год, февраль).

// Сколько сегодня прошло секунд?
//     Напишите функцию getSecondsToday(), возвращающую количество секунд с начала се-годняшнего дня.
//     Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
//     Ответ:
function getSecondsToday(){
    let now= new Date()
    let hours=now.getHours()*3600
    let minutes=now.getMinutes()*60
    let seconds=now.getSeconds()
    return hours+minutes+seconds
}
getSecondsToday()// == 10800 // (3600 * 3)

// Сколько секунд осталось до завтра?
//     Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до зав-трашней даты.
//     Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного зна-чения сегодняшней даты.
//     Ответ:
function getSecondsToTomorrow(){
    let now= new Date()
    let oneDay=24*3600
    let hours=now.getHours()*3600
    let minutes=now.getMinutes()*60
    let seconds=now.getSeconds()
    return oneDay-(hours+minutes+seconds)
}
getSecondsToTomorrow()// == 86400-10800=75600 //

// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принци-пу:
// •	Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// •	В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// •	В противном случае, если меньше часа, вывести "m мин. назад".
// •	В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
//     Например:
// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
//
// Ответ:

    function formatDate(date) {
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let diffSeconds = Math.round((new Date() - date) / 1000)
        let diffMinutes = diffSeconds / 60
        let diffHour = diffMinutes / 60

        year = year.toString().substring(2)
        month = month < 10 ? '0' + month : month
        day = day < 10 ? '0' + day : day
        hour = hour < 10 ? '0' + hour : hour
        minutes = minutes < 10 ? '0' + minutes : minutes

        if (diffSeconds < 1) {
            return 'прямо сейчас'
        } else if (diffMinutes < 1) {
            return `${diffSeconds} сек. назад`
        } else if (diffHour < 1) {
            return `${diffMinutes} мин. назад`
        } else {
            return `${day}.${month}.${year} ${hour}:${minutes}`
        }
    }
formatDate(new Date(new Date - 1)) // "прямо сейчас"
formatDate(new Date(new Date - 30 * 1000)) // "30 сек. назад"
formatDate(new Date(new Date - 5 * 60 * 1000)) // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
formatDate(new Date(new Date - 86400 * 1000))

