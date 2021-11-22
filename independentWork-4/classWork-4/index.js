// const url = "https://jsonplaceholder.typicode.com/todos";
// const requestURl = "https://jsonplaceholder.typicode.com/users";

// console.log("Preparing data...")
// setTimeout(()=>{
//   console.log("Request")
//   const responseData={
//     server:"aws",
//     port:8081,
//     status:"working",
//     modified:false
//   };
//   setTimeout(()=>{
//     responseData.modified=true
//     console.log("Data recieve"+responseData)
//   },3000)
// },2000)
//----------------------------------------------------


// const promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Request")
//     const responseData={
//       server:"aws",
//       port:8081,
//       status:"working",
//       modified:false
//     };
//   resolve(responseData)
// },2000)
// })


// promise.then((data)=>{
//   setTimeout(()=>{
//     data.modified=true
//     console.log("data recieved",data)
//   },2000)
// }
// ).catch((e)=>console.error(e))
//-----------------------------------

// const delay=(ms)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>resolve(),ms)
//   });
// };
// delay(2000).then(()=>{console.log('2 сек')})

  // const url = "https://jsonplaceholder.typicode.com/todos";
//  const fetchData=()=>{
//    return delay(2000)
//       .then(()=>fetch(url))
//       .then(response=>response.json());
//  };
//  fetchData().then(data=>console.log(data))
//     .catch((e)=>console.error(e))

// const fetchAsyncData=async()=>{
//   try{
//     await delay(2000)
//     const response=await fetch(url)
//     const data=await response.json()
//     console.log(data)
//   }catch(e){
//     console.error(e)
//   }
// }
// fetchAsyncData();
//------------------

//const requestURl = "https://jsonplaceholder.typicode.com/users";

// const getUsers=(method,url)=>{
//   return fetch(url).then((r)=>r.json())
// }
 
// getUsers("GET",requestURl)
//     .then((data)=> console.log(data))
//     .catch(e=>console.log(e))
//-------------------------------

//headers: "application/json"
/*
body:{
  name:"Oleg"
  age:25
}
*/

const requestURl = "https://jsonplaceholder.typicode.com/users";

const body={
  name:"Oleg",
  age:25
};

function getUsers(method,url,body=null){
  const headers={
    "Content-Type":"application/json"
  };
  return fetch(url,{
    method:method,
    body:JSON.stringify(body),
    headers:headers
  }).then(response=>{
      return response.json()
  })
}
 
 getUsers("POST",requestURl,body)
    .then((data)=> console.log(data))
    .catch((err) => console.log(err));


