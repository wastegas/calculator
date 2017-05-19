import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/';

function Display(props) {
	return (
		<div>
			{props.display}
		</div>
	   )
}

function Keys(props) {
	const keys = props.keys;
	const item = keys.map((v, key) => 
		 <button className={v.oper} key={key} onClick={() => props.onClick(v.val)}>{v.val}</button>
	);
		return(<div>{item}</div>)
}

class Buttons extends Component {
			
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
			<Keys keys={keys} onClick={(n) => this.props.onClick(n)} />
		)
	}
}

class Calculator extends Component {
	constructor(props) {
		super(props);
	}
	handleClick(v) {
		console.log(v);
		this.props.action.updateDisplay(v);
	}
	render() {

		const { display, expression } = this.props;

		return (
			<div>
				<Display display={display} />
				<Buttons onClick={(n) => this.handleClick(n)}/>
			</div>
		)
	}
}

function mapStateToProps(state, prop) {
	return {
		expression: state.expression,
		display: state.display.display,
		firstentry: state.firstentry
	}
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators(actionCreators, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
