//#1 Напишите интерфейсы для 3-х обьектов ниже

const obj1: I1 = {
  prop1: "prop1",
  prop2: "prop2",
  prop3: () => "prop3"
};

interface I1{
  prop1: string,
  prop2: string,
  prop3: () => string
};

const obj2: I2 = {
  prop4: 45,
  prop5: Object.keys(obj1),
  prop6: () => +"100" + +"100",
  prop7: () => () => +"100" - +"100" + "50",
  prop8: !(() => +"55" * 20 + "150")
};

interface I2 {
  prop4: number,
  prop5: string[],
  prop6: () => number,
  prop7: () => () => number|string,
  prop8: boolean
};
// в obj3 нужно передать в дженерик - интерфейс типы
// которые будет возвращать функция propObj4

const obj3: I3<string|number|I1|[string,number,I2]> = {
  propObj1: 43,
  propObj2: () => () => obj1,
  propObj3: () => [obj1, obj2],
  propObj4: (num: number) => {
    if (num === 1) {
      return "num1";
    } else if (num === 2) {
      return 2;
    } else if (num === 3) {
      return obj1;
    } else {
      return ["1", 2, obj2];
    }
  }
};

interface I3<T> {
  propObj1: number,
  propObj2: () => () => I1,
  propObj3: () => [I1,I2],
  propObj4: (num:number)=>T
};
//#2 работа с Untility Types
const unionObj = {
  key1: "key1",
  key2: "key2",
  key3: "key3",
  key4: "key4"
};

//получить обьединение ключей 'key1' | 'key2'
// из обьекта unionObj
interface unionKeys0 extends Pick<typeof unionObj,'key1'|'key2'>{}
type unionKeys =Pick<typeof unionObj,'key1'|'key2'>
type unionKeys1 =Omit<typeof unionObj,'key3'|'key4'>
type unionKeys2 =Extract<keyof typeof unionObj,'key1'|'key2'>
type unionKeys3 =Exclude<keyof typeof unionObj,'key3'|'key4'>


interface IBaseInterface {
  goodProp1: string;
  goodProp2: number;
  badProp1: string;
}

interface IBaseInherit extends IBaseInterface {
  goodProp3: string;
  goodProp4: number;
  badProp2: string;
}

// получить тип только с хорошими свойствами из IBaseInherit
type goodProps = Omit< IBaseInherit,'badProp1'|'badProp2'>

// получить тип этой функции
// и тип ее возвращаемого значения
const exampleHandler = () => ({
  exampleKey1: "exampleKey1",
  exampleKey2: 100,
  exampleKey3: "exampleKey3"
});

type TExampleHandler = typeof exampleHandler 
type TExampleReturnType = ReturnType<TExampleHandler>

//#3
// передать функцию в typeFunction чтобы она полностью
// подходила под тип funcType

type funcType = (
  param: number
) =>
  | undefined
  | null
  | ((flag: boolean) => string | (() => Promise<(string | number)[]>));

const typeFunction = (func: funcType) => {
  func(1);
};

typeFunction((p) => {
  switch(p){
    case 0:return undefined;
    case 1:return null;
    case 2:return (flag:boolean)=>flag?'string':()=>Promise.resolve(['string',p])
  }
});

//#4
// напишите тело класса чтобы имплеминитровать
// интерфейсы IImplement1 и IImplement2

interface IImplement1<T extends string | number> {
  name: string;
  randomProp: T;
  handler(param1: T, param2: T): T;
  handler2(param: string, param2: number): () => boolean;
}
interface IImplement2 {
  handler3<T>(param: T): T[];
  handler4(): Promise<string>;
}

class Implementator implements IImplement1<string>, IImplement2 {
  name:string;
  randomProp:string;
  constructor(name:string,randomProp:string){
    this.name=name
    this.randomProp=randomProp
  }
  handler(param1:string,param2:string):string{
    return param1+param2
  }
  handler2(param1:string,param2:number){
    return ()=>!!param1&&!!param2
  }
  handler3<T>(param:T):T[]{
    return [param]
  }
  handler4(){
    return new Promise<string>((reject)=>reject('Error!'))
  }
}
