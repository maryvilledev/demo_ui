import React from 'react'
import { connect } from 'react-redux'
import { choosePlayer } from '../actions'
import FreeAgentList from '../components/FreeAgentList'

class ChooseFreeAgents extends React.Component {
  constructor() {
    super()
    this.handleFreeAgentSelected = this.handleFreeAgentSelected.bind(this)
  }

  handleFreeAgentSelected(playerName) {
    const { dispatch } = this.props
    dispatch(choosePlayer(playerName))
  }

  render() {
    const { turn, freeAgents } = this.props
    return (
      <FreeAgentList
        onSelectFreeAgent={this.handleFreeAgentSelected}
        turn={turn}
        freeAgents={freeAgents}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  turn: state.players.turn,
  freeAgents: state.players.free
})

export default connect(mapStateToProps)(ChooseFreeAgents)
