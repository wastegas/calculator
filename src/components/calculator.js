import React, { Component } from 'react';
import Display from './display';
import Buttons from '../containers/buttons';
import '../styles.scss';

class Calculator extends Component {
	render() {
		return (
			<div className='calculator'>
				<Display  />
				<Buttons />
			</div>
		)
	}
}

export default Calculator;
