import { UPDATE_EXPRESSION, SLICE_EXPRESSION } from '../constants/actionTypes';

const initialState = {
	expression: ""
}

export default function expressionReducer(state = initialState, action) {
	switch(action.type) {
		case UPDATE_EXPRESSION:
			console.log("updating");
			return {
				...state,
				expression: state.expression.concat(action.payload)
			}
			break;
		case SLICE_EXPRESSION:
			console.log("slicing...");
			return {
				...state,
				expression: state.expression.slice(0, -1)
			}
			break;
		default:
			return state;
	}
}
