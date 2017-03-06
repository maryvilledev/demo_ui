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
    this.handlePlayerSelected = this.handlePlayerSelected.bind(this)
  }

  handlePlayerSelected(ev) {
    const { onSelectFreeAgent } = this.props
    const playerName = ev.target.innerText
    onSelectFreeAgent(playerName)
  }

  render() {
    const { turn, freeAgents } = this.props
    const teamName = (turn === 'red' ? 'Red' : 'Blue')
    const agentListItems = freeAgents.map((name, num) => (
      <li
        key={num}
        onClick={this.handlePlayerSelected}
        style={style.listItem}
      >
        {name}
      </li>
    ))
    return (
      <div>
        <h2>Free Agents:</h2>
        <h4>{`${teamName}'s pick`}</h4>
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
