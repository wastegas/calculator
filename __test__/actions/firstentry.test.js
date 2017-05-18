import { TOGGLE_FIRSTENTRY } from '../../src/constants/actionTypes';
import * as actions from '../../src/actions';

describe('toggleFirstEntry', () => {
	it('return action TOGGLE_FIRSTENTRY', () => {
		const expectedAction = {
			type: TOGGLE_FIRSTENTRY
		}
		expect(actions.toggleFirstEntry()).toEqual(expectedAction)
	})
})
