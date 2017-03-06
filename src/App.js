import React from 'react'
import { PageHeader, Grid, Col, Row } from 'react-bootstrap'
import AddPlayer from './containers/AddPlayer'
import ChooseFreeAgents from './containers/ChooseFreeAgents'

const App = () => (
  <div>
    <PageHeader>Team Chooser</PageHeader>
    <Grid fluid>
      <Row>
        <Col sm={3}>
          <AddPlayer />
        </Col>
        <Col sm={5}>
          <ChooseFreeAgents />
        </Col>
      </Row>
    </Grid>
  </div>
)

export default App
