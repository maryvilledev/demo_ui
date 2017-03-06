import React from 'react'
import { connect } from 'react-redux'
import { chooseTeamMember } from '../actions'
import FreeAgentList from '../components/FreeAgentList'
import ProjectPicker from '../components/ProjectPicker'

const getProjectNames = (projects) => {
  let names = []
  for (const key in projects) {
    names.push(key)
  }
  return names
}

class ChooseFreeAgents extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedProject: null
    }
    this.handleFreeAgentSelected = this.handleFreeAgentSelected.bind(this)
    this.handleProjectSelected = this.handleProjectSelected.bind(this)
  }

  handleFreeAgentSelected(teamMemberName) {
    const { dispatch } = this.props
    const { selectedProject } = this.state
    if (selectedProject === null) return;
    dispatch(chooseTeamMember(teamMemberName, selectedProject))
  }
  handleProjectSelected(projectName) {
    this.setState({selectedProject: projectName})
  }

  render() {
    const { freeAgents, projects } = this.props
    const { selectedProject } = this.state
    return (
      <div>
        <ProjectPicker
          projects={projects}
          onChangeSelected={this.handleProjectSelected}
          selected={selectedProject}
        />
        <FreeAgentList
          onSelectFreeAgent={this.handleFreeAgentSelected}
          freeAgents={freeAgents}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  freeAgents: state.projectState.free,
  projects: getProjectNames(state.projectState.projects)
})

export default connect(mapStateToProps)(ChooseFreeAgents)
