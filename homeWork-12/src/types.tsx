export interface IInitialState {
  history: string[],
  directory: string[],
  commandsHistory: string[],
  currentPosition: number,
  statePrev: string,
  stateNext: string,
  printMessage: string
}



export interface IAction {
  type: string,
  payload: string
}