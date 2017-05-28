import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
	render() {
	return (
		<div className='display'>
			<div className='expression'>
				{this.props.expression}
			</div>
			<div className="input">
				{this.props.display}
			</div>
		</div>
	   )
	}
}

function mapStateToProps(state, prop) {
	return {
		expression: state.expression.expression,
		display: state.display.display,
	}
}

export default connect(mapStateToProps)(Display)
