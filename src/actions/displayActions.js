import { UPDATE_DISPLAY, RESULT_DISPLAY, CLEAR_DISPLAY } from '../constants/actionTypes';

export function updateDisplay(text) {
	return {
		type: UPDATE_DISPLAY,
		payload: text
	}
}

export function resultDisplay(text) {
	return {
		type: RESULT_DISPLAY,
		payload: eval(text)
	}
}

export function clearDisplay() {
	return {
		type: CLEAR_DISPLAY
	}
}
