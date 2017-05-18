import { combineReducers } from 'redux';
import expression from './expression';
import display from './display';
import firstentry from './firstentry';

export default combineReducers({
	expression,
	display,
	firstentry
})
