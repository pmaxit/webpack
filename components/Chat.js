import React, { Component, PropTypes } from 'react';
import { Modal, DropdownButton, Row, MenuItem, Button, Navbar, NavDropdown, Nav, NavItem } from 'react-bootstrap';

import MessageListItem from './MessageListItem'
import * as actions from '../actions/chatActions'

export default class Chat extends Component{


	render(){
		
		const {messages, handleClickOnUser} = this.props;
			return(
				<Row style={{height:"200px", overflowY: 'scroll'}}>
				<ul style={{wordWrap: 'break-word', margin:0, padding: '0', paddingBottom: '1em'}} ref="messageList">
            		{messages.map(message =>
              			<MessageListItem handleClickOnUser={handleClickOnUser} message={message} key={message.id} />
            		)}

          		</ul>
			</Row>
		);
	}
}