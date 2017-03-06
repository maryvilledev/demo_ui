import React from 'react'
import { Panel } from 'react-bootstrap'

const style = {
  list: {
    listStyle: 'none'
  },
  listItem: {
    font: 'bold 18pt sans-serif'
  }
}

class TeamDisplay extends React.Component {
  render() {
    const { name, teamMembers } = this.props
    const teamName = (name === 'red' ? 'Red:' : 'Blue:')
    const customListItemStyle = {...style.listItem, color: name}
    const listItems = teamMembers.map((name, num) => (
      <li key={num} style={customListItemStyle}>{name}</li>
    ))
    return (
      <div>
        <h2>{teamName}</h2>
        <Panel>
          <ul style={style.list}>
            {listItems}
          </ul>
        </Panel>
      </div>
    )
  }
}

export default TeamDisplay
