import * as types from '../../src/constants/actionTypes';
import firstentry from '../../src/reducers/firstentry';

describe('firstentry', () => {
	it('should handle TOGGLE_FIRSTENTRY', () => {
		expect(
			firstentry({firstentry:false},
				{
						type: types.TOGGLE_FIRSTENTRY
				})
			).toEqual(
				{
					firstentry: true
				}
			)
	})
	it('should handle RESET_FIRSTENTRY', () => {
		expect (
			firstentry({firstentry:false},
				{
					type: types.RESET_FIRSTENTRY
				})
			).toEqual(
				{
					firstentry: true
				}
			)
	})
})
