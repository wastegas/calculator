import * as types from '../../src/constants/actionTypes';
import expression from '../../src/reducers/expression';

describe('expression', () => {
	it('should handle undefined type', () => {
		expect(
			expression({expression:""},
				{
					type: undefined
				})
		).toEqual(
			{
				expression: ""
			}
		)
	})
	it('should handle UPDATE_EXPRESSION', () => {
		expect(
			expression({expression:""}, 
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
			expression({expression:"1+"},
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
			expression({expression:"1+1"},
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
			expression({expression:"1+1"},
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
