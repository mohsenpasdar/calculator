const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_SCREEN':
      return {
        ...state,
        input: '', output: ''
      }
    case 'SET_INPUT':
      return {
        output: '', input: state.input + action.value
      }
    case 'BACKSPACE':
      return {
        ...state, input: action.value
      }
    case 'GET_RESULT':
      return {
        input:'', output: action.value
      }
    default:
      return state
  }
}

export default calculatorReducer
