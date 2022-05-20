import { useContext } from 'react'
import CalculatorContext from '../context/calculator-context'

const Input = () => {

  const { state } = useContext(CalculatorContext)
  return (
    <div>
      <input type='text' value={state.input} readOnly/>
    </div>
  )
}

export default Input
