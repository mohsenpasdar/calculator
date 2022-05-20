import { useReducer } from 'react'
import Header from './Header'
import Screen from './Screen'
import Keyboard from './Keyboard'
import CalculatorContext from '../context/calculator-context'
import calculatorReducer from '../reducers/calculatorReducer'


const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, { input: '', output: '' })

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      <Header />
      <Screen />
      <Keyboard />
    </CalculatorContext.Provider>
  )
}

export default Calculator
