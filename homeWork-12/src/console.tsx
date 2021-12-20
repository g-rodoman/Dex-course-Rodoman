import { useState, useRef, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import {cd, print, next, prev, error} from './reducer';
import { IInitialState } from './types'



export const Console = () => {

  const [inputValue, setInputValue] = useState('')
  const history = useSelector((state: IInitialState) => state.history)
  const directory = useSelector((state: IInitialState) => state.directory);
  const statePrev = useSelector((state: IInitialState) => state.statePrev);
  const stateNext = useSelector((state: IInitialState) => state.stateNext);

  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch();

  function clearInput() {
      if (inputRef.current) {
        inputRef.current.value = ""
      }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  })

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {

      case 'Enter':
        if (inputValue.split(' ')[0] === 'cd'){
          dispatch(cd(inputValue))
          clearInput()
        } else if (inputValue.split(' ')[0] === 'print') {
          dispatch(print(inputValue))
          clearInput()
        } else {
          const commandNotFound = `Error: ${inputValue} command not found`
          dispatch(error(commandNotFound))
          clearInput()
        }          
        break;

      case 'ArrowUp':
        dispatch(next())
        if (inputRef.current) {
          inputRef.current.value = stateNext
        } 
        break;

      case 'ArrowDown':
        dispatch(prev())
        if (inputRef.current) {
          inputRef.current.value = statePrev
        }
        break;

      default: break;
    } 
  }

  return (
    <div>
      <ul>
        {history.map((el, i) => <li key={i}>{el}</li>)}
      </ul>
      <div>
        <div className="directory">{directory.join('')}</div>
        <input 
          className="input" 
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value.trim())}
        />
      </div>
    </div>
  );
}