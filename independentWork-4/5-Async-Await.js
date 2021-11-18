/* Перепишите, используя async/await
Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}
loadJson('no-such-user.json') // (3)
.catch(alert); // Error: 404 */
async function loadJson(url) { 
  let response = await fetch(url)
  if (response.status == 200) {
    let json = await response.json()
    return json;
  }
  else
  	throw new Error(response.status)
}
loadJson('no-such-user.json')
  .catch(alert); // Error: 404 (4)
  
/* Вызовите async–функцию из "обычной"
Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}
function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
P.S. Технически задача очень простая, но этот вопрос часто задают разработчики,
 недавно познакомившиеся с async/await. */
 async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 10
}
function f() {
  wait().then(result => alert(result))
}
f()
