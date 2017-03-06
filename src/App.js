import React from 'react'
import { PageHeader, Grid, Col, Row } from 'react-bootstrap'
import AddTeamMember from './containers/AddTeamMember'
import ChooseFreeAgents from './containers/ChooseFreeAgents'
import DisplayTeams from './containers/DisplayTeams'

const App = () => (
  <div>
    <PageHeader>Team Chooser</PageHeader>
    <Grid fluid>
      <Row>
        <Col sm={3}>
          <AddTeamMember />
        </Col>
        <Col sm={4}>
          <ChooseFreeAgents />
        </Col>
        <Col sm={5}>
          <DisplayTeams />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default App
