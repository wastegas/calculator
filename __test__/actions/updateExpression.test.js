import updateExpression from '../../src/actions/updateExpression.js';
import * as types from '../../src/constants/actionTypes';

describe('updateExpression', () => {
	it('should create an action UPDATE_EXPRESSION', () => {
		const text = "1";
		const expectedAction = {
			type: types.UPDATE_EXPRESSION,
			payload: text
		}

		expect(updateExpression(text)).toEqual(expectedAction)
	})
})
