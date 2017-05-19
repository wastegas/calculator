import { UPDATE_DISPLAY, RESULT_DISPLAY, CLEAR_DISPLAY } from '../constants/actionTypes';


export default function display(state = {display:"0"}, action) {
	switch(action.type) {
		case UPDATE_DISPLAY:
			return {
				...state,
				display: state.display.concat(action.payload),
			}
			break;
		case RESULT_DISPLAY:
			return {
				...state,
				display: eval(action.payload),
			}
			break;
		case CLEAR_DISPLAY:
			return {
				...state,
				display: "",
			}
			break;
		default:
			return state;
	}
}
