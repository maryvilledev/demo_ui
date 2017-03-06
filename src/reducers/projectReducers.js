const defaultState = {
  free: [],
  projects: []
}

const projectState = (state=defaultState, action) => {
  switch(action.type){
    case "ADD_TEAM_MEMBER": {
      const teamMemberName = action.payload
      const free = state.free.slice() //For immutibility
      free.push(teamMemberName)
      state = {...state, free}
      break;
    }
    case "CHOOSE_TEAM_MEMBER": {
      const { teamMemberName, projectName } = action.payload;
      const free = state.free.slice(); //For immutibility
      const index = free.findIndex((teamMember) => teamMember === teamMemberName)
      const projects = state.projects
      if (index < 0 || projects[projectName] === undefined){
        break //Early return if not found
      }
      free.splice(index, 1) //Deletes the element from the array
      projects[projectName].push(teamMemberName);
      state = {...state, free, projects}
      // if (index < 0) break //Early return if not found
      // free.splice(index, 1) //Deletes the element from the array
      // let turn = state.turn
      // if (turn === 'red') {
      //   const red = state.red.slice() //For immutibility
      //   red.push(teamMemberName)
      //   state = {...state, free, red, turn: 'blue'}
      // } else if ( turn === 'blue') {
      //   const blue = state.blue.slice() //For immutibility
      //   blue.push(teamMemberName)
      //   state = {...state, free, blue, turn: 'red'}
      // }
      break
    }
    default:
      //NOP
      break;
  }
  return state
}

export default projectState
