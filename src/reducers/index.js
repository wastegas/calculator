import { combineReducers } from 'redux';
import expressionReducer from './expressionReducer';
import displayReducer from './displayReducer';

export default combineReducers({
	expressionReducer,
	displayReducer
})
