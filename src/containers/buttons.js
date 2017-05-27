import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

function Keys(props) {
	const keys = props.keys;
	const item = keys.map((v, key) => 
		 <button className={v.oper} key={key} onClick={() => props.onClick(v.val)}>{v.val}</button>
	);
		return(<div className='keys'>{item}</div>)
}

class Buttons extends Component {
		handleClick(v) {
		if (v === 'AC') {
			this.props.action.resetCalculator();
			return;
		}
		if (v === 'C') {
			this.props.action.sliceExpression();
			return;
		}
		if (v === '=') {
			this.props.action.resultDisplay();
			return;
		}
		this.props.action.updateDisplay(v);
	}

	//handleClick(v) {
	//	this.props.action.updateExpression(v);
	//	this.props.action.updateDisplay(v);
	//}
	render() {
			const keys = [
				{val:"AC", oper:"func"},
				{val:"C",  oper:"func"},
				{val:"(",  oper:"func"},
				{val:")",  oper:"func"},
				{val:"7",  oper:"num"},
				{val:"8",  oper:"num"},
				{val:"9",  oper:"num"},
				{val:"/",  oper:"oper"},
				{val:"4",  oper:"num"},
				{val:"5",  oper:"num"},
				{val:"6",  oper:"num"},
				{val:"*",  oper:"oper"},
				{val:"1",  oper:"num"},
				{val:"2",  oper:"num"},
				{val:"3",  oper:"num"},
				{val:"-",  oper:"oper"},
				{val:"0",  oper:"num"},
				{val:".",  oper:"num"},
				{val:"=",  oper:"oper"},
				{val:"+",  oper:"oper"}
			]
return (
			<Keys keys={keys} onClick={(n) => this.handleClick(n)} />
		)
	}
}

function mapStateToProps(state, props) {
	return {
		expression: state.expression.expression,
		display: state.display.dispaly,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(actionCreators, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
