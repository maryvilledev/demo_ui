import React from 'react'
import { connect }  from 'react-redux'
import { addTeamMember } from '../actions'
import AddTeamMemberForm from '../components/AddTeamMemberForm'

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
      <AddTeamMemberForm onSubmit={this.onSubmit} />
    )
  }
}

export default connect()(AddTeamMember);
