import * as types from '../constants/actionTypes';

export function updateExpression(text) {
	return { type: types.UPDATE_EXPRESSION, payload: text}
}

export function sliceExpression() {
	return { type: types.SLICE_EXPRESSION }
}

export function clearExpression() {
	return { type: types.CLEAR_EXPRESSION }
}

export function updateDisplay(text) {
	return {
		type: types.UPDATE_DISPLAY,
		payload: text
	}
}

export function resultDisplay(text) {
	return {
		type: types.RESULT_DISPLAY,
		payload: eval(text)
	}
}

export function clearDisplay() {
	return {
		type: types.CLEAR_DISPLAY
	}
}

export function toggleFirstEntry() {
	return {
		type: types.TOGGLE_FIRSTENTRY
	}
}
