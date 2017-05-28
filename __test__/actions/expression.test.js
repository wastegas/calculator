import * as actions from '../../src/actions/';
import * as types from '../../src/constants/actionTypes';

describe('actions', () => {
	it('should create an action UPDATE_EXPRESSION', () => {
		const text = "1";
		const expectedAction = {
			type: types.UPDATE_EXPRESSION,
			payload: text
		}

		expect(actions.updateExpression(text)).toEqual(expectedAction)
	})
	it('should create an action SLICE_EXPRESSION', () => {
		const expectedAction = {
			type: types.SLICE_EXPRESSION
		}

		expect(actions.sliceExpression()).toEqual(expectedAction)
	})
	it('should create an action CLEAR_EXPRESSION', () => {
		const expectedAction = {
			type: types.CLEAR_EXPRESSION
		}
		expect(actions.clearExpression()).toEqual(expectedAction)
	})

})
