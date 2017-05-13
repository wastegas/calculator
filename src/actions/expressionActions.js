import { UPDATE_EXPRESSION, SLICE_EXPRESSION, CLEAR_EXPRESSION } from '../constants/actionTypes';

export function updateExpression(text) {
	return { type: UPDATE_EXPRESSION, payload: text}
}

export function sliceExpression() {
	return { type: SLICE_EXPRESSION }
}

export function clearExpression() {
	return { type: CLEAR_EXPRESSION }
}
