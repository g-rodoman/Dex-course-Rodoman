//#1
// Раскоментировать код и починить ошибку чтобы отработала консоль
class ClassFirst {
  constructor(prop1) {
    this.prop1 = prop1;
  }
}
class ClassSecond extends ClassFirst {
  constructor(prop1, prop2) {
    super(prop1);
    this.prop2 = prop2;
  }
}
class ClassThird extends ClassSecond {
  constructor(prop1, prop2, prop3) {
    super(prop1, prop2);
    this.prop3 = prop3;
  }
}
const instance = new ClassThird('prop1', 'prop2', 'prop3');
console.log('PROPS =>', instance.prop1, instance.prop2, instance.prop3);

//#2
// Создать класс со свойствами title и date
// и статическим свойством , которое при вызове
// всегда возвращает новый экземпляр газеты с текущей датой

export class NewsPaper {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createNewPaper(title){
    return new this(title, (new Date()).toLocaleDateString());
  }
}

// #3 Создать иерархию классов
// ThirdCalculate -> SecondCalculate -> CalculateBase
// чтобы при вызове метода calculate у Класса ThirdCalculate
// выводилась строка
// ThirdCalculate: 1 SecondCalculate: 2 CalculateBase: 3
class CalculateBase {
  constructor() {
    this.count = 0
  }
  calculate() {
    return `CalculateBase ${++this.count}`
  }
}
class SecondCalculate extends CalculateBase {
  calculate() {
    return `SecondCalculate ${++this.count} ${super.calculate()}`
  }
}
class ThirdCalculate extends SecondCalculate {
  calculate() {
    return `ThirdCalculate ${++this.count} ${super.calculate()}`
  }
}
const calc = new ThirdCalculate();
console.log(calc.calculate());

//#4
//написать функцию которая будет вызывать нужный модуль
//по передаваемом типу first или second

export const callCurrentModule = async(type) => {
  if(type==='first'){
    await (await import('./module1.js')).moduleFirst()
  }
  else{
    await (await import('./module2.js')).moduleSecond()
  }
};

//#5 написать функцию
// которая выведет в консоль 'PING'
// передаваемое кол-во раз , раз в секунду

const pinger=(times)=> {
  let count=1
  let timerId = setInterval(function() {
    console.log('PING')
    if (count === times) 
      clearInterval(timerId);
    count++;
  }, 1000);
}
pinger(10);
