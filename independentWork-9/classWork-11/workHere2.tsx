import { combineReducers } from "redux";
import { createStore } from "redux";

export interface IAction {
  type: string;
  payload: {};
}
interface IDepartment extends String {}
interface IEmployee {
  name: String;
  department: IDepartment;
}

const addDepartment = {
  type: "department/add",
  payload: "mobile"
};
const deleteDepartment = {
  type: "department/delete",
  payload: "mobile"
};
const addEmployee = {
  type: "employee/add",
  payload: {
    name: "John",
    department: "Mobile"
  }
};
const deleteEmployee = {
  type: "employee/delete",
  payload: {
    name: "John"
  }
};

const initialStateDep: IDepartment[] = [];
// Создать редюсер с экшонами "departments/add" и "departments/delete"
const departmentsReducer = (state = initialStateDep, action: IAction) => {
  switch (action.type) {
    case addDepartment.type:
      return [...state, addDepartment.payload];
    case deleteDepartment.type:
      return state.filter((s) => s !== deleteDepartment.payload);
    default:
      return state;
  }
};
const initialStateEmpl: IEmployee[] = [];
// Создать редюсер с экшонами "emloees/add" и "emploees/delete"
const employeesReducer = (state = initialStateEmpl, action: IAction) => {
  switch (action.type) {
    case addEmployee.type:
      return [...state, addEmployee.payload];
    case deleteEmployee.type:
      return state.filter((s) => s.name !== deleteEmployee.payload.name);
    default:
      return state;
  }
};

// Создать рут редюсер

const rootReducer = combineReducers({
  departmentsReducer,
  employeesReducer
});

// создать стор
const store = createStore(rootReducer);
console.log("log", store.getState());

// const store = createStore()
// console.log("log", store.getState());

// вызвать каждый экшон
store.dispatch(addDepartment);
console.log(store.getState());

store.dispatch(deleteDepartment);
console.log(store.getState());

store.dispatch(addEmployee);
console.log(store.getState());

store.dispatch(deleteEmployee);
console.log(store.getState());

// законсолить изменения стейта
