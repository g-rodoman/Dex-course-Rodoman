// const workerExample = {
//   name: "Igor",
//   age: 34,
//   address: {
//     street: "Lenin",
//     house: 23,
//     apartments: 16
//   },
//   userBonuses: {
//     2019: 700,
//     2020: 750,
//     2021: 100
//   },
//   wage: 500,
//   hobby: ["chess", "basketball"]
// };

// TODO: Отсортировать пользователей по уровню зп
// Вывод: отсортированные зп через запятую
export const getSortWage = (data) => {
  return data
    .map((item) => item.wage)
    .sort((a, b) => a - b)
    .join(", ");
};

// TODO: Вывести зп всех пользователей
// Число (сумма всех зп)
export const getWageSum = (data) => {
  return data.reduce((sum, current) => sum + current.wage, 0);
};

// TODO: Вывести пользователя с женским именем, знаем, что имя Ekaterina
export const getWomenName = (data) => {
  //  let nameIndex=data.findIndex(item=>item.name==='Ekaterina')
  //  return data[nameIndex].name
  // return data.find(e=>e.name.endWith('a')).name
};

// TODO: Вывести самого молодого и самого старшего пользователя
// Вывод: "Самого младшего пользователя зовут {...} и ему ${age}.
// Самого старшего пользователя зовут {...} и ему ${age}."
export const getMinMaxUserAge = (data) => {};

// TODO: Вывести кол-во пользователей, играющих в баскетбол
// Элемент выглядит как "basketball"
// Вывод: "В баскетбол играют {число} пользователей"
export const getBasketPlayers = (data) => {
  // return data.map(e=>e.hobby.includes('basketball')).length
  return data.filter((e) => e.hobby.includes("basketball")).length;
};

//TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
// {street: "8 March"}
// Вывод: "По адресу {...} живут пользователи {...}"
export const getUsersAddress = (data) => {
  //  // const users= data.filter(e=>isFinite(e.address.street.slice(0,1)))
  //   const users= data.map((v)=>
  //   isFinite(v.address.street.slice(0,1)))
  //  return users//.foreach(e=>e.address.street+' '+e.name)
  //1 отфильтровать массив объектов по свойству address.street
  //2 отфильтрованный массив перебрать и вывести строку с адресом и именем
};

//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
export const getDoubleUserBonuses = (data) => {};
