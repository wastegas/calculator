import { TOGGLE_FIRSTENTRY, RESET_FIRSTENTRY } from '../../src/constants/actionTypes';
import * as actions from '../../src/actions';

describe('actions', () => {
	it('should handle TOGGLE_FIRSTENTRY', () => {
		const expectedAction = {
			type: TOGGLE_FIRSTENTRY
		}
		expect(actions.toggleFirstentry()).toEqual(expectedAction)
	})
	it('should handle RESET_FIRSTENTRY', () => {
		const expectedAction = {
			type: RESET_FIRSTENTRY
		}
		expect(actions.resetFirstentry()).toEqual(expectedAction)
	})
})
