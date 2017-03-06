import React from 'react'
import { connect }  from 'react-redux'
import { addPlayer } from '../actions'
import AddPlayerForm from '../components/AddPlayerForm'

class AddPlayer extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(playerName) {
    const { dispatch } = this.props
    dispatch(addPlayer(playerName))
  }

  render() {
    return (
      <AddPlayerForm onSubmit={this.onSubmit} />
    )
  }
}

export default connect()(AddPlayer);
