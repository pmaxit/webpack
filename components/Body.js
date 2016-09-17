import React, {Component} from 'react';
import {form, PageHeader, 
	Row, Col, Panel, FormGroup, ControlLabel, FormControl, HelpBlock, Anchor} from 'react-bootstrap'

import Chat from '../containers/ChatContainer'
import io from 'socket.io-client'

export default class Body extends Component{
	
	
	
	handleChange = (event) => (
		
			console.log(event.target.value)
		);

	render(){
		return(
			<div>
      <div className="bs-docs-header" id="content">
        <div className="container">
          <h1> TItle </h1>
          <p> Subtitle</p>
        </div>
      </div>
			<div className="container bs-docs-container bs-docs-single-col-container">
            <div className="bs-docs-section">
              <h2 className="page-header"></h2>

              <Row>
                <Col sm={6}>
                  <Panel header="npm (recommended)" className="bs-docs-code-panel">
                    <Chat boxId={2}/>
                  </Panel>
                </Col>
                <Col sm={6}>
                  <Panel header="Chat" className="bs-docs-code-panel">
                   	<Chat boxId={1}/>
                  </Panel>
                </Col>
              </Row>
              <Row>
              <Col sm={12}>
              	<form>
				<FormGroup>
					<ControlLabel> Working example with Validation </ControlLabel>
					<FormControl
						type="text"
						value={""}
						placeholder="Enter text"
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
					<HelpBlock> Validation is based on string length. </HelpBlock>
				</FormGroup>
				</form>

              </Col>
			</Row>
			</div>
		</div>
		</div>

			)
	}
}
