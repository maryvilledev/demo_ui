import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import CodeContainer from './containers/CodeContainer'
import DescriptionView from './components/DescriptionView'

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      description: null,
    }

  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={6}>
            <CodeContainer
              onMouseEnter={description => this.setState({description: description})}/>
          </Col>
          <Col md={6} className="description">
            <DescriptionView
              active={(this.state.description) ? true : false}
              description={this.state.description}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
