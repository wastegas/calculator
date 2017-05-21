import { RESET_FIRSTENTRY, TOGGLE_FIRSTENTRY } from '../constants/actionTypes';

export default function firstentry(state = {firstentry: true}, action) {
	switch(action.type) {
		case RESET_FIRSTENTRY:
			return state = {
				...state,
				firstentry: true
			}
			break;
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
