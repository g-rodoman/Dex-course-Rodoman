export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  for(let item of cartData){
    if('oldPrice' in item){
      if(item.price<item.oldPrice){
        const oldPrice=item.oldPrice
        item.discount=oldPrice-item.price
      }
      delete item.oldPrice
    } 
  }
  cartData.forEach(item=>console.log(item))
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  const cartItemPizza=cartItem.find(item=>item.name==="Пицца с анчоусами")
  let cartItemCopy = Object.assign({}, cartItemPizza);
  cartItemCopy.addedIngredients[0].count++
  return cartItemCopy;
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  const pizza=cartData.filter(item=>item.type==="pizza")
  const water=cartData.filter(item=>item.type==="water")
  const other=cartData.filter(item=>item.type==="other")
  let obj= {
    pizza:{
      count:pizza.reduce((a,b)=>a+b.count,0), 
      sum:pizza.reduce((a,b)=>a+(b.price*b.count),0)},
    water:{
      count:water.reduce((a,b)=>a+b.count,0),
      sum:water.reduce((a,b)=>a+(b.price*b.count),0)},
    other:{
      count:other.reduce((a,b)=>a+b.count,0),
      sum:other.reduce((a,b)=>a+(b.price*b.count),0)},
    }
  const count=obj.pizza.count+obj.water.count+obj.other.count
  const sum=obj.pizza.sum+obj.water.sum+obj.other.sum
  obj.total={
    count,
    sum
  }
  return obj
};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
 // return cartData.filter(item=>item.date === date) ;
  const cartItemsByDate = cartData.filter(item=>item.date===date)
  return cartItemsByDate.length?cartItemsByDate:cartData
};

export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  const orderByDate = cartData.filter((item) =>item.date === date)
  let repeatOrder = Object.assign([], orderByDate);
  repeatOrder.forEach((item,index )=> {
      item.id = String(cartData.length)+String(index);
      item.date = new Date().toISOString();
  });
  cartData.unshift(repeatOrder)
  return cartData;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  cartData.find(value=>value.id===item.id).count++;
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  const total = cartData.reduce((sum, current) => sum + current.price * current.count,0);
  const oneBigPosition = cartData.filter((item) => item.price > 500).length;
  const notDiscounted = cartData.filter((item) => item.discount);
  return {
    total: total > 1000,
    oneBigPosition: oneBigPosition > 0,
    notDiscounted: notDiscounted.length === 0
  };
};
