import * as types from '../constants/actionTypes';

export function resetCalculator() {
	return(dispatch) => {
		dispatch(clearExpression());
		dispatch(clearDisplay());
		dispatch(resetExpression());
	}
}

export function clearExpression() {
	return {
		type: types.CLEAR_EXPRESSION
	}
}

export function clearDisplay() {
	return {
		type: types.CLEAR_DISPLAY
	}
}

export function resetFirstentry() {
	return {
		type: types.RESET_FIRSTENTRY
	}
}

export function deletePrevious() {
	return(dispatch, getState) => {
		const { expression } = getState().expression;
		if ( parseInt(expression.slice(-1)) || expression.slice(-1)[0] === '.' || expression.slice(-1)[0] === '0') {
			dispatch(sliceDisplay());
		} else {
			dispatch(toggleFirstentry());
		} 
		dispatch(sliceExpression());
	}
}

export function sliceDisplay() {
	return {
		type: types.SLICE_DISPLAY
	}
}

export function sliceExpression() {
	return {
		type: types.SLICE_EXPRESSION
	}
}

export function updateCalc(text) {
	
	return(dispatch,getState) => {
		const { firstentry } = getState().firstentry;
		if (firstentry) { 
			dispatch(toggleFirstentry());
			dispatch(firstEntry(text));
		} else {
			const { expression } = getState().expression;
			if (parseInt(text) || text === '.' || text === '0') {
				dispatch(updateDisplay(text));
			}
		}
		dispatch(updateExpression(text));
		if (text != '.' && text != '0' && !parseInt(text)) {
			dispatch(toggleFirstentry());
		}
	}
}

export function firstEntry(text) {
	return {
		type: types.FIRSTENTRY_DISPLAY,
		payload: text
	}
}

export function updateDisplay(text) {
	return {
		type: types.UPDATE_DISPLAY,
		payload: text
	}
}

export function updateExpression(text) {
	return {
		type: types.UPDATE_EXPRESSION,
		payload: text
	}
}

export function calcResult() {
	return (dispatch, getState) => {
		const { expression } = getState().expression;
		const result = eval(expression.join(''));
		dispatch(resultDisplay(result));
		dispatch(clearExpression());
		dispatch(resetFirstentry());
	}
}

export function resultDisplay(result) {
	return {
		type: types.RESULT_DISPLAY,
		payload: result
	}
}

export function toggleFirstentry() {
	return {
		type: types.TOGGLE_FIRSTENTRY
	}
}
