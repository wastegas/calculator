import * as types from '../../src/constants/actionTypes';
import expressionReducer from '../../src/reducers/expressionReducer';

describe('expressionReducer', () => {
	it('should return default state', () => {
		expect(
			expressionReducer({type: "",})
		).toEqual(
			{
				expression: ""
			}
		)
	})
})
