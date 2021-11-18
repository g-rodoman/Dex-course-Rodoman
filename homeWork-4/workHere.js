//TODO: Напишите функцию счётчик вызовов, 
//должна принимать название и функцию, а возвращать функцию
//Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, func) => {
  let count=0
  return function(){
    count++
    console.log("name:"+name+" count:"+count)
    func.apply(this)
  }
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, 
//а возвращать функцию
//Выводит в консоль, в момент вызова функции из параметров, 
//её параметры, результат и название
export const logger = (name, func) => {
  return function(...args){
    const result=func.apply(this,args)
    console.log("name:"+name)
    console.log("args:"+args)
    console.log("result:"+result)
  }
};

//TODO: Напишите функцию каррирования, должна принимать функцию, 
//а возвращать функцию
//Каррирование – это трансформация функций таким образом, чтобы 
//они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
//Должна работать для любого кол-ва аргументов
export const curry = (func) => {
  return function curried(...args){
    const context = this;
    if(args.length>=func.length){
      return func.apply(context,args)
    }
    else{
      return function(...args2){
        return curried.apply(context,[...args,...args2])
      }
    }
  }
};
