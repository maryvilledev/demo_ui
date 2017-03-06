export const addPlayer = (playerName) => ({
  type: "ADD_PLAYER",
  payload: playerName
})

export const choosePlayer = (playerName) => ({
  type: "CHOOSE_PLAYER",
  payload: playerName
})
