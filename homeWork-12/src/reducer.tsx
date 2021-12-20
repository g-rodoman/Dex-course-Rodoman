import { IInitialState, IAction } from './types'

const initialState: IInitialState = {
  history: [],
  directory: ['C:'],
  commandsHistory: [],
  currentPosition: 0,
  statePrev: '',
  stateNext: '',
  printMessage: ''
}

export const cd = (string: string) => ({
  type: 'cd',
  payload: string
})

export const print = (string: string) => ({
  type: 'print',
  payload: string
})

export const error = (string: string) => ({
  type: 'error',
  payload: string
})

export const prev = () => ({
  type: 'prev'
})

export const next = () => ({
  type: 'next'
})



export const reducer = (state = initialState, action:IAction) => {
  switch (action.type) { 
    case 'cd':
      if (action.payload === 'cd') {
        return state
      } else if (action.payload.split(' ')[1] === '..' ) {
        return {
          ...state,
          history: [...state.history, state.directory.join('') + " " + action.payload],
          directory: state.directory.slice(0, state.directory.length - 1),
          currentPosition: --state.currentPosition,
        }
      }
      return {
          ...state,
          history: [...state.history, state.directory.join('') + ' ' + action.payload ],
          directory: [...state.directory, '\\' + action.payload.split(' ')[1]],
          commandsHistory: [...state.commandsHistory, action.payload],
          currentPosition: ++state.currentPosition,
          statePrev: '',
          stateNext: ''
      }
        
    case 'print':
      return {
          ...state,
          history: [...state.history, action.payload.replace('print ', '')],
          bufferCommands: [...state.commandsHistory, action.payload],
          printMessage: action.payload
      }
        
    case 'error': 
      return {
          ...state,
          history: [...state.history,  action.payload ]
      }

    case 'prev':
      if (state.currentPosition === 0) {
        return {
          ...state,
          statePrev: state.commandsHistory[state.currentPosition]
        }
      } else {
          return {
            ...state,
            currentPosition: state.currentPosition - 1,
            statePrev: state.commandsHistory[state.currentPosition - 1]
          }
      }

    case 'next':
      if (state.currentPosition === state.commandsHistory.length - 1) {
        return {
          ...state,
          stateNext: state.commandsHistory[state.currentPosition]
        }
      } else {
        return {
          ...state,
          stateNext: state.commandsHistory[state.currentPosition],
          currentPosition: state.currentPosition + 1
        }
      }

    default:  return state;
  }
}