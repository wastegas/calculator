import * as types from '../../src/constants/actionTypes';
import * as actions from '../../src/actions/';

describe('actions', () => {
	it('should create an action UPDATE_DISPLAY', () => {
		const text = "1";
		const expectedAction = {
			type: types.UPDATE_DISPLAY,
			payload: text
		}

		expect(actions.updateDisplay(text)).toEqual(expectedAction)
	})
	it('should create an action RESULT_DISPLAY', () => {
		const text = "2";
		const expectedAction = {
			type: types.RESULT_DISPLAY,
			payload: "2" 
		}
		expect(actions.resultDisplay(text)).toEqual(expectedAction)
	})
	it('should create an action CLEAR_DISPLAY', () => {
		const expectedAction = {
			type: types.CLEAR_DISPLAY
		}
		expect(actions.clearDisplay()).toEqual(expectedAction)
	})
	it('should create an action SLICE_DISPLAY', () => {
		const expectedAction = {
			type: types.SLICE_DISPLAY
		}
		expect(actions.sliceDisplay()).toEqual(expectedAction)
	})
})
