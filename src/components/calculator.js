import React, { Component } from 'react';

const Display = function() {
	return <p>0</p>
}

function Keys(props) {
	const keys = props.keys;
	const item = keys.map((v, key) => 
		 <button className={v.oper} key={key} onClick={() => props.onClick({v})}>{v.val}</button>
	);
		return(<div>{item}</div>)
}

class Buttons extends Component {
			
	handleClick(v) {
		console.log(v);
	}
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

class Calculator extends Component {
	render() {
		return (
			<div>
				<Display />
				<Buttons />
			</div>
		)
	}
}

export default Calculator;
