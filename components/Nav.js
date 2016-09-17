import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'

export default class NavComponent extends Component{
	constructor(props){
		super(props);
	}

	handleSelect = () => (console.log("hello world"))

	render(){
		return(
	<Navbar inverse>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#"> react-bootstrap </a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href="#">Link </NavItem>
				<NavItem eventKey={2} href="#">Link </NavItem>
				<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown"> 
					<MenuItem eventKey={3.1}> Action </MenuItem>
					<MenuItem eventKey={3.2}> Action 2</MenuItem>
					<MenuItem divider />
				</NavDropdown>
			</Nav>
			<Nav pullRight>
				<NavItem eventKey={1} href="#"> Link Right </NavItem>
				<NavItem eventKey={2} href="#"> Link Right </NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	);
   } 
}
