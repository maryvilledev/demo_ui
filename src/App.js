import React from 'react'
import { PageHeader } from 'react-bootstrap'
import AddPlayer from './containers/AddPlayer'

const App = () => (
  <div>
    <PageHeader>Team Chooser</PageHeader>
    <AddPlayer />
  </div>
)

export default App
