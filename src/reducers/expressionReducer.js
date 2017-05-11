export default function expressionReducer(state = {
	expression: "",
}, action) {
	switch(action.type) {
		case "BUILD_EXPRESSION":
			state = {
				...state,
				expression: state.expression.concat(action.payload)
			}
			break;
		default:
			return state;
	}
	return state;
}
