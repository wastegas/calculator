import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
	render() {
	return (
		<div className='display'>
			{this.props.display}
		</div>
	   )
	}
}

function mapStateToProps(state, prop) {
	return {
		display: state.display.display,
	}
}

export default connect(mapStateToProps)(Display)
