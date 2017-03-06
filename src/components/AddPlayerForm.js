import React from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

class AddPlayerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      valid: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    const name = ev.target.value
    this.setState({name, valid: true})
  }

  handleSubmit() {
    const { name } = this.state
    const { onSubmit } = this.props
    if (name !== '') {
      this.setState({
        name: '',
        valid: true
      })
      onSubmit(name)
    } else {
      this.setState({valid: false})
    }
  }

  render() {
    const { name, valid } = this.state;
    const validationState = (valid ? null : 'error')
    return (
      <div>
        <FormGroup validationState={validationState}>
          <FormControl
            type="text"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter name..."
          />
          <Button onClick={this.handleSubmit} bsStyle='primary'>Add Name</Button>
        </FormGroup>
      </div>
    )
  }
}

export default AddPlayerForm;
