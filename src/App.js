import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { PageHeader, Grid, Col, Row } from 'react-bootstrap'
import AddTeamMember from './containers/AddTeamMember'
import AddProject from './containers/AddProject'
import ChooseFreeAgents from './containers/ChooseFreeAgents'
import DisplayTeams from './containers/DisplayTeams'
import StateManager from './containers/StateManager'

class App extends React.Component {
  render() {
    const component = (props) => (
      <div>
        <PageHeader>Team Chooser</PageHeader>
        <Grid fluid>
          <Row>
            <Col sm={3}>
              <AddProject />
              <AddTeamMember />
            </Col>
            <Col sm={4}>
              <ChooseFreeAgents />
            </Col>
            <Col sm={5}>
              <DisplayTeams />
            </Col>
          </Row>
          <Row>
            <StateManager {...props}/>
          </Row>
        </Grid>
      </div>
    )
    return (
      <Router history={browserHistory}>
        <Route path="/(:id)" component={component} />
      </Router>
    )
  }
}

export default App
