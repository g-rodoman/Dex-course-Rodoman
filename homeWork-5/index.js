import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch

//  async function getData(str){
//   return compareText(str)
//     .then(resp=>{return resp})
//     .catch(err=> {throw err})
// };
//----------------------------------------------
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
// const processingData = async (str) => {
//   try {
//         const result = await getData(str);
//         console.log("Success: ",result);
//       }catch(err){
//         console.error("Error: ",err.message);
//       }
// };
// processingData("короткий текст");
// processingData("длинный тексттттттттттт");
//----------------------------------------------------
// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действие должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
// const getResponse = async (str) => {
//     const result = await compareText(str)
//       .then((response) => response + " :)")
//       .catch((error) => {
//         throw new Error(error.message + " :(");
//       })
//       .then((response) => {
//         let newResponse = response;
//         while (newResponse?.length < 20) {
//           newResponse += ")";
//         }
//         return newResponse;
//       })
//       .catch((response) => {
//         let newResponse = response.message;
//         while (newResponse?.length < 20) {
//           newResponse += "(";
//         }
//         return newResponse;
//       });
  
//     console.log("result:", result);
//   };

// getResponse("короткий текст");
// getResponse("Длинный текстттт");
//-----------------------------------------------------
// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  try{
    const response= await fetch(url)
    if(response.status<200||response.status>299)
      throw new Error(response.status)
    const data= await response.json()
    console.log('Get data from API:',data)
    
  }catch(e){console.error("Ошибка:",e.message)}
  
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
