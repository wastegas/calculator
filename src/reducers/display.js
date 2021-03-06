import { FIRSTENTRY_DISPLAY, SLICE_DISPLAY, UPDATE_DISPLAY, RESULT_DISPLAY, CLEAR_DISPLAY } from '../constants/actionTypes';


export default function display(state = {display:"0"}, action) {
	switch(action.type) {
		case FIRSTENTRY_DISPLAY:
			return {
				...state,
				display: action.payload
			}
			break;
		case UPDATE_DISPLAY:
			return {
				...state,
				display: state.display.concat(action.payload),
			}
			break;
		case SLICE_DISPLAY:
			return {
				...state,
				display: state.display.slice(0, -1)
			}
			break;
		case RESULT_DISPLAY:
			return {
				...state,
				display: action.payload,
			}
			break;
		case CLEAR_DISPLAY:
			return {
				...state,
				display: "0",
			}
			break;
		default:
			return state;
	}
}
