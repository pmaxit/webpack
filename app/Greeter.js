import React from 'react'
import config from './config'
import {Grid, Row , Col, Button, ButtonToolbar} from 'react-bootstrap'
import io from 'socket.io-client'

export default class Greeter extends React.Component{

	constructor(props){
		super(props);
		this.state = { messages: []}
	}

	handleSubmit = (event) => {
		const body = event.target.value;
		if(event.keyCode == 13 && body){
			const message = {
				body,
				from : 'Me'
			}
			this.setState({messages: [ message, ...this.state.messages]})
			event.target.value= ""
		}
	}

	render(){
		const messages = this.state.messages.map((message, index) => {
			return <li key={index}> <b> {message.from}: </b> {message.body} </li>
		});

		return(
			  <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
			)
	}
}