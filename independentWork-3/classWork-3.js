// Создать функцию обёртку
// которая в начало каждой строки будет добавлять слово "Hello"
// const funcContainer = (str1) => (params) => str1 + " " + params;
// const funcChild = funcContainer("Hello ");

// console.log(funcChild("word"));
// console.log(funcChild("Ben"));
//------------------------------------
// Создать функцию, которая будет выполняться как func(1)(2)(3)
//const funcСurrying=(n1)=>(n2)=>(n3)=>n1+n2+n3
// console.log("funcСurrying(1)(3)(4) ", funcСurrying(1)(3)(4));
//------------------------------------
// Создать функцию, которая будет выполняться
// при вызове func(1,2,3), func(1,2)(3),func(1)(2,3), func(1)(2)(3)
// и возвращать их сумму

// function funcСurryingArgs(...rest) {
//   console.log("rest:"+rest);
//   if (rest.length >= 3) {
//     return rest.reduce((a, b) => a + b, 0);
//   } else {
//     return (...rest2) => {
//       console.log("rest2:"+rest2)
//       return funcСurryingArgs(...rest, ...rest2);
//     }
//   }
// }

// console.log("funcСurryingArgs(1,3,4) ", funcСurryingArgs(1, 3, 4));
// console.log("funcСurryingArgs(1,3)(4) ", funcСurryingArgs(1, 3)(4));
// console.log("funcСurryingArgs(1)(3,4) ", funcСurryingArgs(1)(3, 4));
// console.log("funcСurryingArgs(1)(3)(4) ", funcСurryingArgs(1)(3)(4));
//--------------------------------------------
// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению

function funcСurryingCount(count){
  return function funcCurrent(...rest){
    console.log("rest:"+rest);
    if (rest.length>=count){
      return rest.reduce((a,b)=>a+b,0);
    } else {
      return (...rest2)=> {
        console.log("rest2:"+rest2)
        return funcCurrent(...rest,...rest2);
      }
    }
  }
}

const funcCurrent = funcСurryingCount(3);

console.log("funcCurrent(1,3,4) ", funcCurrent(1, 3, 4));
console.log("funcCurrent(1,3)(4) ", funcCurrent(1, 3)(4));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4) ", funcCurrent(1)(3)(4));

// const func1 = () => {
//   console.log(func2());
// };

// const func2 = () => {
//   console.trace();
//   return "func2!!!!!!!";
// };

// func1();
