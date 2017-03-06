import reducers from '../src/reducers'

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducers(undefined, {})
    ).toEqual({
      projectState: {
        free: [],
        projects: []
      }
    })
  })

  describe('projectState', () => {
    it('should handle ADD_TEAM_MEMBER', () => {
      const teamMemberName = 'Donnie'
      expect(
        reducers({}, {
          type: 'ADD_TEAM_MEMBER',
          payload: teamMemberName
        }).projectState.free
      ).toEqual([teamMemberName])
    })
    it('should handle CHOOSE_TEAM_MEMBER', () => {
      const teamMemberName = 'Frank'
      const projectName = 'Airplane Void'
      let projects = []
      projects[projectName] = []
      const nextState = reducers({
        projectState: {
          free: [teamMemberName],
          projects: projects
        }
      }, {
        type: 'CHOOSE_TEAM_MEMBER',
        payload: {teamMemberName, projectName}
      }).projectState
      expect(nextState.free).toEqual([])
      expect(nextState.projects[projectName]).toEqual([teamMemberName])
    })
    it('should handle ADD_PROJECT', () => {
      const projectName = "Flood the school"
      expect(
        reducers(undefined, {
          type: 'ADD_PROJECT',
          payload: projectName
        }).projectState.projects[projectName]
      ).toEqual([])
    })
    it('should handle RESTORE_STATE', () => {
      const savedState = {
        free: ['Frank'],
        projects: ['Flood the School' : ['Donnie']]
      }
      expect(
        reducers(undefined, {
          type: 'RESTORE_STATE',
          payload: savedState
        }).projectState
      ).toEqual(savedState)
    })
  })
})
