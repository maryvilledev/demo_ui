const defaultState = {
  free: [],
  red: [],
  blue: [],
  turn: 'red'
}

const players = (state=defaultState, action) => {
  switch(action.type){
    case "ADD_PLAYER": {
      const playerName = action.payload
      const free = state.free.slice() //For immutibility
      free.push(playerName)
      state = {...state, free}
      break;
    }
    case "CHOOSE_PLAYER": {
      const playerName = action.payload;
      const free = state.free.slice(); //For immutibility
      const index = free.findIndex((player) => player === playerName)
      if (index < 0) break //Early return if not found
      free.splice(index, 1) //Deletes the element from the array
      let turn = state.turn
      if (turn === 'red') {
        const red = state.red.slice() //For immutibility
        red.push(playerName)
        state = {...state, free, red, turn: 'blue'}
      } else if ( turn === 'blue') {
        const blue = state.blue.slice() //For immutibility
        blue.push(playerName)
        state = {...state, free, blue, turn: 'red'}
      }
      break
    }
    default:
      //NOP
      break;
  }
  return state
}

export default players
