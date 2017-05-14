import { UPDATE_DISPLAY, RESULT_DISPLAY, CLEAR_DISPLAY } from '../constants/actionTypes';

const initialState = {
	display: "",
	firstentry: false
}

export default function displayReducer(state = initialState, action) {
	switch(action.type) {
		case UPDATE_DISPLAY:
			return {
				...state,
				display: state.display.concat(action.payload),
				firstentry: false
			}
			break;
		case RESULT_DISPLAY:
			return {
				...state,
				display: eval(action.payload),
				firstentry: true
			}
			break;
		case CLEAR_DISPLAY:
			return {
				...state,
				display: "",
				firstentry: true
			}
			break;
		default:
			return state;
	}
}
