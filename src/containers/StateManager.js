import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { restoreState } from '../actions'

const style = {
  float: 'right'
}

class StateManager extends React.Component {
  constructor(){
    super()
    this.handleSaveState = this.handleSaveState.bind(this)
  }
  componentDidMount() {
    const { dispatch } = this.props
    const { id } = this.props.params
    if (!id) return
    axios.get(`/api/states/${id}`)
      .then(res => {
        const stateString = res.data.json
        const obj = JSON.parse(stateString)
        dispatch(restoreState(obj))
      })
      .catch(err => {
        browserHistory.push('/')
      })
  }
  handleSaveState() {
    const { projectState } = this.props
    const stateString = JSON.stringify(projectState);
    axios.post('/api/states/', { json: stateString })
      .then(res => {
        const id = res.data.id;
        browserHistory.push(`/${id}`);
      })
      .catch(err => {
        console.error(err);
      })
  }
  render() {
    return (
      <Button
        size="lg"
        style={style}
        onClick={this.handleSaveState}
      >
        Save
      </Button>
    )
  }
}

const mapStateToProps = (state) => ({
  projectState: state.projectState
})

export default connect(mapStateToProps)(StateManager)
