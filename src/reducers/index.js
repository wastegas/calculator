import { combineReducers } from 'redux';
import expressReducer from './expressionReducer';
import displayReducer from './displayReducer';

export default combineReducers({
	expressionReducer,
	displayReducer
})
