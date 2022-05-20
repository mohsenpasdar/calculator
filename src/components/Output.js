import { useContext } from 'react'
import CalculatorContext from '../context/calculator-context'

const Output = () => {
  const { state } = useContext(CalculatorContext)
  return (
    <div>
      <input type='text' value={state.output} readOnly/>
    </div>
  )
}

export default Output
