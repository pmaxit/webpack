import React, {Component} from 'react';
import {connect} from 'react-redux'

import io from 'socket.io-client'
import Chat from '../components/Chat'
import ChatSubmit from "../components/SubmitChat"
import * as actions from '../actions/chatActions'

import {Grid, Row } from 'react-bootstrap'


class ChatContainer extends Component{

	constructor(props){
		super(props);
		this.socket = io('http://localhost:3000')
	}

	componentDidMount(props){

		const {boxId, dispatch} = this.props;
		this.socket.on('new bc message', function(data){
			dispatch(actions.addMessage(data.msg, boxId))
		})
	}

	render(){
		const {boxId, messages} = this.props;
		const filterMessages = messages.filter(msg => (msg.boxId == boxId))
		return(
			<Grid fluid>	
				<Chat {...this.props} socket={this.socket} messages={filterMessages}/>
				<ChatSubmit socket={this.socket} boxId={boxId}/>
			</Grid>
				
			);
	}
}


function mapStateToProps(state){

	return{
		messages: state.chat.messages,
		user: state.chat.user
	}
}

export default connect(mapStateToProps)(ChatContainer)