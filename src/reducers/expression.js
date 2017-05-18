import { UPDATE_EXPRESSION, SLICE_EXPRESSION, CLEAR_EXPRESSION } from '../constants/actionTypes';

export default function expression(state = "", action) {
	switch(action.type) {
		case UPDATE_EXPRESSION:
			return {
				...state,
				expression: state.expression.concat(action.payload)
			}
			break;
		case SLICE_EXPRESSION:
			return {
				...state,
				expression: state.expression.slice(0, -1)
			}
			break;
		case CLEAR_EXPRESSION:
			return {
				...state,
				expression: ""
			}
			break;
		default:
			return state;
	}
}
