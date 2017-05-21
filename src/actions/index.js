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
	
	return(dispatch,getState) => {
		const { firstentry } = getState().firstentry;
		if (firstentry) { 
			dispatch({type: types.TOGGLE_FIRSTENTRY});
			dispatch({type: types.FIRSTENTRY_DISPLAY , payload: text});
		} else {
			const { expression } = getState().expression;
			if (parseInt(text) || text === '.') {
				dispatch({type: types.UPDATE_DISPLAY, payload: text});
			}
		}
		dispatch({type: types.UPDATE_EXPRESSION, payload: text});
		if (text != '.' && !parseInt(text)) {
			dispatch({type: types.TOGGLE_FIRSTENTRY});
		}
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
