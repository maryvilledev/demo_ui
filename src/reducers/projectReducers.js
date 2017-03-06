const defaultState = {
  free: [],
  projects: {}
}

const deepCopy = (array) => {
  let newArray = []
  for (const key in array) {
    newArray[key] = array[key]
  }
  return newArray
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
      const projects = deepCopy(state.projects)
      if (index < 0 || projects[projectName] === undefined){
        break //Early return if not found
      }
      free.splice(index, 1) //Deletes the element from the array
      projects[projectName].push(teamMemberName);
      state = {...state, free, projects}
      break
    }
    case "ADD_PROJECT": {
      const projectName = action.payload
      const projects = deepCopy(state.projects)
      if (projects[projectName] !== undefined) {
        break //Early return if project already exists
      }
      projects[projectName] = []
      state = {...state, projects}
      break
    }
    case "RESTORE_STATE": {
      const { free, projects } = action.payload;
      state = { free, projects }
      break
    }
    default:
      //NOP
      break;
  }
  return state
}

export default projectState
