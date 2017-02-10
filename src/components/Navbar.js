import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Navbar = ({activeTab, onSwitchTab}) => (
  <Nav bsStyle="tabs"
     activeKey={activeTab}
      onSelect={tab => {
        onSwitchTab(tab)
      }}>
    <NavItem eventKey={0}>Java</NavItem>
  </Nav>
)

Navbar.propTypes = {
  activeTab: React.PropTypes.number,
  onSwitchYab: React.PropTypes.func,
}

export default Navbar;
