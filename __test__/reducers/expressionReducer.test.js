import * as types from '../../src/constants/actionTypes';
import expressionReducer from '../../src/reducers/expressionReducer';

describe('expressionReducer', () => {
	it('should handle UPDATE_EXPRESSION', () => {
		expect(
			expressionReducer({expression:""}, 
				{
					type: types.UPDATE_EXPRESSION, 
					payload: "1"
				})
		).toEqual(
			{
				expression: "1"
			}
		)
	})
	expect(
			expressionReducer({expression:"1+"},
					{
						type: types.UPDATE_EXPRESSION,
						payload: "1"
					})
			).toEqual(
				{
					expression: "1+1"
				}
			)
	it('should handle SLICE_EXPRESSION', () => {
		expect(
			expressionReducer({expression:"1+1"},
					{
						type: types.SLICE_EXPRESSION
					})
			).toEqual(
				{
					expression: "1+"
				}
			)
	})
	it('should handle CLEAR_EXPRESSION', () => {
		expect(
			expressionReducer({expression:"1+1"},
					{
						type: types.CLEAR_EXPRESSION
					})
			).toEqual(
				{
					expression: ""
				}
			)
	})
})
