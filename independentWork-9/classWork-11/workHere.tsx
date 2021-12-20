import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState= { greetings: "Hello world" };

// Определить тип для экшона
export interface IAction {
  type: string
}

// создать экшены FirstAction, SecondAction, AsyncAction
const FirstAction: IAction = { type: "FIRST_ACTION" };
const SecondAction: IAction = { type: "SECOND_ACTION" };

// создать редьюсер, который обрабатывает экшены: первый, второй, асинхронный
const actionReducer = (state = initialState, action: IAction) => {
  if (action.type === "FIRST_ACTION") {
    return { ...state, greetings: "hello FIRST_ACTION" };
  } else if (action.type === "SECOND_ACTION") {
    return { ...state, greetings: "hello SECOND_ACTION" };
  }
  return state;
};

// создать стор
const store = createStore(actionReducer);
console.log("log", store.getState());

// TODO подписаться на изменения сторы

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Вызвать каждый экшон по одному разу
store.dispatch(FirstAction);
store.dispatch(SecondAction);

// отписаться от изменений сторы
unsubscribe();
// Вызвать первый экшон ещё раз
store.dispatch(FirstAction);
// Вывести в консоль текущее состояние сторы

console.log("End log", store.getState());
