import React from 'react'
import { connect }  from 'react-redux'
import { addTeamMember } from '../actions'
import AddForm from '../components/AddForm'

class AddTeamMember extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(teamMemberName) {
    const { dispatch } = this.props
    dispatch(addTeamMember(teamMemberName))
  }

  render() {
    return (
      <AddForm onSubmit={this.onSubmit}>Team Member</AddForm>
    )
  }
}

export default connect()(AddTeamMember);
