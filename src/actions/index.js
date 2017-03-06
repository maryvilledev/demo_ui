export const addTeamMember = (teamMemberName) => ({
  type: "ADD_TEAM_MEMBER",
  payload: teamMemberName
})

export const chooseTeamMember = (teamMemberName, projectName) => ({
  type: "CHOOSE_TEAM_MEMBER",
  payload: { teamMemberName, projectName }
})

export const addProject = (projectName) => ({
  type: "ADD_PROJECT",
  payload: projectName
})

export const restoreState = (savedState) => ({
  type: "RESTORE_STATE",
  payload: savedState
})
