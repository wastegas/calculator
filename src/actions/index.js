import * as types from '../constants/actionTypes';

export function resetCalculator() {
	return(dispatch) => {
		dispatch({type: types.CLEAR_EXPRESSION });
		dispatch({type: types.CLEAR_DISPLAY });
		dispatch({type: types.RESET_FIRSTENTRY});
	}
}

export function sliceExpression() {
	return(dispatch, getState) => {
		const { expression } = getState().expression;
		if ( parseInt(expression.slice(-1)) || expression.slice(-1)[0] === '.') {
			dispatch({ type: types.SLICE_DISPLAY });
		} else {
			dispatch({ type: types.TOGGLE_FIRSTENTRY });
		} 
		dispatch({ type: types.SLICE_EXPRESSION });
	}
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

export function resultDisplay() {
	return (dispatch, getState) => {
		const { expression } = getState().expression
		dispatch({type: types.RESULT_DISPLAY, payload: eval(expression.join(''))});
		dispatch({type: types.CLEAR_EXPRESSION});
		dispatch({type: types.RESET_FIRSTENTRY});
	}
}
