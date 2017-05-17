import { combineReducers } from 'redux';
import expression from './expressionReducer';
import display from './displayReducer';
import firstentry from './firstentry';

export default combineReducers({
	expression,
	display,
	firstentry
})
