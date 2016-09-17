import React, { Component, PropTypes } from 'react';

import Body from "../components/Body"

import { connect } from 'react-redux'


class BodyContainer extends Component {


	render(){
		return (
				<Body {...this.props} />
			);
	}
}

function mapStateToProps(state){

}

export default connect(mapStateToProps)(BodyContainer)