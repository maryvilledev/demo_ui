const defaultState = {
  free: [],
  red: [],
  blue: []
}

const players = (state=defaultState, action) => {
  switch(action.type){
    case "ADD_PLAYER":
      const playerName = action.payload
      const free = state.free.slice() //For immutibility
      free.push(playerName)
      state = {...state, free}
      break;
    default:
      //NOP
      break;
  }
  return state
}

export default players
