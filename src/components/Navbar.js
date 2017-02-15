import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Navbar = ({tabs, activeTab, onSwitchTab}) => (
  <Nav bsStyle="tabs"
     activeKey={activeTab}
      onSelect={tab => {
        onSwitchTab(tab)
      }}>
    {tabs.map((tab, index) => 
    <NavItem key={index} eventKey={index}>
      {tab}
    </NavItem>)}
  </Nav>
)

Navbar.propTypes = {
  tabs: React.PropTypes.array,
  activeTab: React.PropTypes.number,
  onSwitchYab: React.PropTypes.func,
}

export default Navbar;
