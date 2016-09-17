import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Form, PageHeader, 
	Row, Col, Panel, FormGroup, ControlLabel, Button, FormControl, HelpBlock, Anchor} from 'react-bootstrap'

export default class SubmitChat extends Component{

	render(){
		const {socket} = this.props;
		const {boxId} = this.props;

		return(
			<Form horizontal>
				<FormGroup>
					<Col sm={10}>
						<FormControl type="text" placeholder="Enter message" ref="myTextInput"/>
					</Col>

					<Col sm={2}>		
						<Button onClick={()=> { 
								var l = ReactDOM.findDOMNode(this.refs.myTextInput)
								socket.emit('new message',{msg: l.value,boxId: boxId})
							}
						}>  Send </Button>
					</Col>
				</FormGroup>
			</Form>
				
			);
	}
}