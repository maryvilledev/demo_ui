import React from 'react'
import { connect } from 'react-redux'
import TeamDisplay from '../components/TeamDisplay'

const mapProjectsToDisplays = (projects) => {
  let projectArr = []
  for (const key in projects) {
    projectArr.push(<TeamDisplay name={key} teamMembers={projects[key]} />)
  }
  return projectArr
}

class DisplayTeams extends React.Component {
  render() {
    const {projects} = this.props
    return (
      <div>
        {mapProjectsToDisplays(projects)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.projectState.projects
})

export default connect(mapStateToProps)(DisplayTeams)
