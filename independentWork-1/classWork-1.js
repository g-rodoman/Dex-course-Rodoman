//file WorkHere.js
///https://codesandbox.io/s/classwork-2-rmp2l?file=/src/WorkHere.js

export const dataProcessingAboutSalary = (f, s) => {
  
  
  
  return +f + +s
};

export const calculateCashback = (isCashback, sum, cb) => {
if(isCashback){
  sum=sum*cb;
}


};

export const getHolidaysNotifications = (f, s) => {



};

export const getHolidayPrizes = (nameWorker, bDay, salary) => {

// (f, s, t)
/* С сервера приходят данные о каждом пользователе, а именно: 
имя/фамилия, дата рождения и зп. Вы должны написать функцию, которая:
Сравнивает сегодняшнюю дату с датой рождения сотрудника
Если дата совпадает, выводить ее начальнику по типу “У Василия 
Иванова сегодня праздник, его премия составляет {...}”
Начальство придумало следующий алгоритм подсчета премий: к 10% от
 зп сотрудника прибавляется выражение (день умножить на месяц). 
 В большинстве случаев получаются некрасивые цифры типа 213, 157 
 итд. Нужно сделать суммы круглыми - 220, 160 итд. Воспроизведите 
 этот алгоритм.  */

 /*
если сегодня дата рожд то начальнику 
`у ${name} сегодня праздник, его премия составляет ${prem}”
prem=salary*0.1+prem2
prem2=(round((day*month)/10))*10
 */
//дату из строки обработать..
let today= new Date()
let prem
let prem2
let workerDay
let workerMonth

if(today==bDay){
  prem=salary*0,1
  workerDay=bDay.getDay();
  workerMonth=bDay.getMonth();
  prem2=(Math.round((workerDay*workerMonth)/10))*10
  prem+=prem2
  let strCongrat=`у ${nameWorker} сегодня праздник, его премия составляет ${prem}`
  return strCongrat
};

}
