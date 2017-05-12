import { UPDATE_EXPRESSION } from '../constants/actionTypes';

const initialState = {
	expression: ""
}

export default function expressionReducer(state = initialState, action) {
	switch(action.type) {
		case UPDATE_EXPRESSION:
			return {
				...state,
				expression: state.expression.concat(action.payload)
			}
			break;
		default:
			return state;
	}
}
