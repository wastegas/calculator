import * as types from '../constants/actionTypes';

export function resetCalculator() {
	return(dispatch) => {
		dispatch(clearExpression());
		dispatch(clearDisplay());
		dispatch(resetExpression());
	}
}

function clearExpression() {
	return {
		type: types.CLEAR_EXPRESSION
	}
}

function clearDisplay() {
	return {
		type: types.CLEAR_DISPLAY
	}
}

function resetFirstentry() {
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

function sliceDisplay() {
	return {
		type: types.SLICE_DISPLAY
	}
}

function sliceExpression() {
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

function firstEntry(text) {
	return {
		type: types.FIRSTENTRY_DISPLAY,
		payload: text
	}
}

function updateDisplay(text) {
	return {
		type: types.UPDATE_DISPLAY,
		payload: text
	}
}

function updateExpression(text) {
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

function resultDisplay(result) {
	return {
		type: types.RESULT_DISPLAY,
		payload: result
	}
}

function toggleFirstentry() {
	return {
		type: types.TOGGLE_FIRSTENTRY
	}
}
