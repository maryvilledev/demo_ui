import React from 'react'
import { connect } from 'react-redux'
import TeamDisplay from '../components/TeamDisplay'

class DisplayTeams extends React.Component {
  render() {
    const {red, blue} = this.props
    return (
      <div>
        <TeamDisplay name='red' teamMembers={red}/>
        <TeamDisplay name='blue' teamMembers={blue}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  red: state.teamMembers.red,
  blue: state.teamMembers.blue
})

export default connect(mapStateToProps)(DisplayTeams)
