import { UPDATE_EXPRESSION } from '../constants/actionTypes';
export default function updateExpression(text) {
	return { type: UPDATE_EXPRESSION, payload: text}
}
