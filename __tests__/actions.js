import * as actions from '../src/actions'

describe('actions', () => {
  it('creates an action to add a teamMember', () => {
    const teamMemberName = 'Donnie'
    const expected = {
      type: "ADD_TEAM_MEMBER",
      payload: teamMemberName
    }
    expect(actions.addTeamMember(teamMemberName)).toEqual(expected)
  })
  it('creates an action to choose a teamMember', () => {
    const teamMemberName = 'Frank'
    const projectName = 'Airplane Void'
    const expected = {
      type: "CHOOSE_TEAM_MEMBER",
      payload: { teamMemberName, projectName }
    }
    expect(actions.chooseTeamMember(teamMemberName, projectName)).toEqual(expected)
  })
  it('creates an action to add a project', () => {
    const projectName = 'Flood the school'
    const expected = {
      type: "ADD_PROJECT",
      payload: projectName
    }
    expect(actions.addProject(projectName)).toEqual(expected)
  })
  it('creates an action that restores state', () => {
    const savedState = {
      free: ['Frank'],
      projects: ['Flood the School' : ['Donnie']]
    }
    const expected = {
      type: "RESTORE_STATE",
      payload: savedState
    }
    expect(actions.restoreState(savedState)).toEqual(expected)
  })
})
