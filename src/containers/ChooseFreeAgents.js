import React from 'react'
import { connect } from 'react-redux'
import { chooseTeamMember } from '../actions'
import FreeAgentList from '../components/FreeAgentList'

class ChooseFreeAgents extends React.Component {
  constructor() {
    super()
    this.handleFreeAgentSelected = this.handleFreeAgentSelected.bind(this)
  }

  handleFreeAgentSelected(teamMemberName) {
    const { dispatch } = this.props
    dispatch(chooseTeamMember(teamMemberName))
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
  turn: state.teamMembers.turn,
  freeAgents: state.teamMembers.free
})

export default connect(mapStateToProps)(ChooseFreeAgents)
