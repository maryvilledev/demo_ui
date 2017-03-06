import React from 'react'
import { connect } from 'react-redux'
import TeamDisplay from '../components/TeamDisplay'

class DisplayTeams extends React.Component {
  render() {
    const {red, blue} = this.props
    return (
      <div>
        <TeamDisplay name='red' players={red}/>
        <TeamDisplay name='blue' players={blue}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  red: state.players.red,
  blue: state.players.blue
})

export default connect(mapStateToProps)(DisplayTeams)
