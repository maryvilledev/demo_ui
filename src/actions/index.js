export const addTeamMember = (teamMemberName) => ({
  type: "ADD_TEAM_MEMBER",
  payload: teamMemberName
})

export const chooseTeamMember = (teamMemberName, projectName) => ({
  type: "CHOOSE_TEAM_MEMBER",
  payload: { teamMemberName, projectName }
})
