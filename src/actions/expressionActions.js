import { UPDATE_EXPRESSION, SLICE_EXPRESSION } from '../constants/actionTypes';

export function updateExpression(text) {
	return { type: UPDATE_EXPRESSION, payload: text}
}

export function sliceExpression() {
	return { type: SLICE_EXPRESSION }
}
