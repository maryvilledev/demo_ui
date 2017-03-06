import reducers from '../src/reducers'

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      reducers(undefined, {})
    ).toEqual({
      players: {
        free: [],
        red: [],
        blue: [],
        turn: 'red'
      }
    })
  })

  describe('players', () => {
    it('should handle ADD_PLAYER', () => {
      const playerName = 'Donnie'
      expect(
        reducers({}, {
          type: 'ADD_PLAYER',
          payload: playerName
        }).players.free
      ).toEqual(expect.arrayContaining([playerName]))
    })
    it('should handle CHOOSE_PLAYER', () => {
      const playerName = 'Frank'
      expect(
        reducers({players: {turn: 'red', free: [playerName], red: []}}, {
          type: 'CHOOSE_PLAYER',
          payload: playerName
        }).players.red
      ).toEqual(expect.arrayContaining([playerName]))
    })
    it('should reject CHOOSE_PLAYER when name does not exist', () => {
      const playerName = 'Samantha'
      expect(
        reducers({players: {turn: 'red', free: [], red: []}}, {
          type: 'CHOOSE_PLAYER',
          payload: playerName
        }).players.red
      ).toEqual([])
    })
  })
})
