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
})
