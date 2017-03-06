import React from 'react'
import { Panel } from 'react-bootstrap'

const style = {
  list: {
    listStyle: 'none'
  },
  listItem: {
    cursor: 'pointer',
    font: 'bold 18pt sans-serif',
    color: 'green'
  }
}

class FreeAgentList extends React.Component {
  constructor() {
    super();
    this.handleTeamMemberSelected = this.handleTeamMemberSelected.bind(this)
  }

  handleTeamMemberSelected(ev) {
    const { onSelectFreeAgent } = this.props
    const teamMemberName = ev.target.innerText
    onSelectFreeAgent(teamMemberName)
  }

  render() {
    const { freeAgents } = this.props
    const agentListItems = freeAgents.map((name, num) => (
      <li
        key={num}
        onClick={this.handleTeamMemberSelected}
        style={style.listItem}
      >
        {name}
      </li>
    ))
    return (
      <div>
        <h2>Free Team Members:</h2>
        <Panel>
          <ul style={style.list}>
            {agentListItems}
          </ul>
        </Panel>
      </div>
    )
  }
}

export default FreeAgentList
