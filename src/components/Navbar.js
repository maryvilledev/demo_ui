import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Navbar = ({activeTab, onSwitchTab}) => (
  <Nav bsStyle="tabs"
     activeKey={activeTab}
      onSelect={key => {
        onSwitchTab(key)
      }}>
    <NavItem eventKey={1}>Java</NavItem>
  </Nav>
)

Navbar.propTypes = {
  activeTab: React.PropTypes.number,
  onSwitchYab: React.PropTypes.func,
}

export default Navbar;
