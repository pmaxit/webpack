import React, { Component, PropTypes } from 'react';

import Nav from '../components/Nav';
import Body from "../components/Body";

import { connect } from 'react-redux'

class NavContainer extends Component{

	render(){

		return(
			<div>
				<Nav {...this.props} />
				<Body {...this.props} />
			</div>

			);
	}
}
function mapStateToProps(state){
	const {songs} = state;
	return {
			songs
		}
	}


export default connect(mapStateToProps)(NavContainer)