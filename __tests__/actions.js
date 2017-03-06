import * as actions from '../src/actions'

describe('actions', () => {
  it('creates an action to add a player', () => {
    const playerName = 'Donnie'
    const expected = {
      type: "ADD_PLAYER",
      payload: playerName
    }
    expect(actions.addPlayer(playerName)).toEqual(expected)
  })
  it('creates an action to choose a player', () => {
    const playerName = 'Frank'
    const expected = {
      type: "CHOOSE_PLAYER",
      payload: playerName
    }
    expect(actions.choosePlayer(playerName)).toEqual(expected)
  })
})
