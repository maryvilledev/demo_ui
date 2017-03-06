import React from 'react'
import { Panel, Radio } from 'react-bootstrap'

class ProjectPicker extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(ev) {
    const { onChangeSelected } = this.props
    onChangeSelected(ev.target.value)
  }
  render() {
    const { projects, selected } = this.props
    const radios = projects.map((name, num) => (
      <Radio
        key={num}
        checked={selected === name}
        onClick={this.handleClick}
        value={name}>{name}</Radio>
    ))
    return (
      <div>
        <h2>Selected Project:</h2>
        <Panel>
          {radios}
        </Panel>
      </div>
    )
  }
}

export default ProjectPicker
