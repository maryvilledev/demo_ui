import React from 'react'
import { connect }  from 'react-redux'
import { addProject } from '../actions'
import AddForm from '../components/AddForm'

class AddProject extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(projectName) {
    const { dispatch } = this.props
    dispatch(addProject(projectName))
  }

  render() {
    return (
      <AddForm onSubmit={this.onSubmit}>Project</AddForm>
    )
  }
}

export default connect()(AddProject);
