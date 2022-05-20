import { useContext } from 'react'
import CalculatorContext from '../context/calculator-context'

const Keyboard = () => {
  const { state, dispatch } = useContext(CalculatorContext)

  const getCharacter = (e) => {
    dispatch({
      type: 'SET_INPUT',
      value: e.target.value
    })
  }

  const resetScreen = () => {
    dispatch({
      type: 'RESET_SCREEN'
    });
  }

  const backspace = () => {
    dispatch({
      type: 'BACKSPACE',
      value: state.input.slice(0, -1)
    })
  }

  const getResult = () => {
    let value
    
    try {
      value = eval(state.input)
    } catch (err) {
      value = 'math error'
    }

    dispatch({
      type: 'GET_RESULT',
      value
    })
  }

  return (
    <div>
      <div>
        <button type='button' value='clear' onClick={resetScreen}>Clear</button>
        <button type='button' value='delete' onClick={backspace}>Delete</button>
        <button type='button' value='.' onClick={getCharacter}>.</button>
        <button type='button' value='/' onClick={getCharacter}>/</button>
      </div>

      <div>
        <button type='button' value='7' onClick={getCharacter}>7</button>
        <button type='button' value='8' onClick={getCharacter}>8</button>
        <button type='button' value='9' onClick={getCharacter}>9</button>
        <button type='button' value='*' onClick={getCharacter}>*</button>
      </div>

      <div>
        <button type='button' value='4' onClick={getCharacter}>4</button>
        <button type='button' value='5' onClick={getCharacter}>5</button>
        <button type='button' value='6' onClick={getCharacter}>6</button>
        <button type='button' value='-' onClick={getCharacter}>-</button>
      </div>

      <div>
        <button type='button' value='1' onClick={getCharacter}>1</button>
        <button type='button' value='2' onClick={getCharacter}>2</button>
        <button type='button' value='3' onClick={getCharacter}>3</button>
        <button type='button' value='+' onClick={getCharacter}>+</button>
      </div>

      <div>
        <button type='button' value='0' onClick={getCharacter}>0</button>
        <button type='button' value='=' onClick={getResult}>=</button>
      </div>
    </div>
  )
}

export default Keyboard
