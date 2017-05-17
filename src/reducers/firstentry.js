import { TOGGLE_FIRSTENTRY } from '../constants/actionTypes';

export default function firstentry(state = false, action) {
	switch(action.type) {
		case TOGGLE_FIRSTENTRY:
			return state = {
				...state,
				firstentry: action.payload
			}
			break;
			default:
				return state;
	}
}
