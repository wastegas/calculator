import { TOGGLE_FIRSTENTRY } from '../constants/actionTypes';

export default function firstentry(state = false, action) {
	switch(action.type) {
		case TOGGLE_FIRSTENTRY:
			return state = {
				...state,
				firstentry: !state.firstentry 
			}
			break;
			default:
				return state;
	}
}
