export const sum = (f, s) => {
  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи

  // Не привязываемся к порядку. Попробовать спарсить нужно оба.
  // Если спарсились оба, то возвращаем их сумму.
  // Если одно, то только что спарсилось.
  // Если ничего, то 0.
let a=parseFloat(f)
let b=parseFloat(s)
a=isNaN(a)?0:+a
b=isNaN(b)?0:+b
return a + b;
};

export const showPrice = (price, discount) => {
  const discountedPrice = price - (price * discount) / 100;

  //TODO: Привести цену к виду: 10.00 р.
  // округлять до копеек в сторону магазина
  let result=Math.ceil(discountedPrice*100)/100+' р.'
  return result;
};

export const findSuccess = (bankResponse) => {
  //TODO: Проверьте что в строке есть 'Success' без учёта регистра
  let result=bankResponse.toLowerCase().includes('success')
  return result?'Yes':'No'
};

export const dateToString = (date) => {
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
  //Cегодня завтра будет вчера, а еще вчера сегодня было завтра - Гуф :)
  
  let givenDate= new Date(date)
  let today= new Date()
  givenDate.setHours(0,0,0,0)
  today.setHours(0,0,0,0)
  let result
  switch(today-givenDate)
  {
      case 0:result='Today';break;
      case 86400000:result='Yesterday';break;
      case -86400000:result='Tomorrow';break;
      default:
        result=`${givenDate.getFullYear()}:${givenDate.getMonth()+1}:${givenDate.getDate()}`
  }
  return result;
};

export const sort = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
  
  let result=data.sort((a,b)=>a.localeCompare(b))
  return result
};
