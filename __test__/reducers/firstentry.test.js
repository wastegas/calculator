import { TOGGLE_FIRSTENTRY } from '../../src/constants/actionTypes';
import firstentry from '../../src/reducers/firstentry';

describe('firstentry', () => {
	it('should handle TOGGLE_FIRSTENTRY', () => {
		expect(
			firstentry({firstentry:false},
				{
						type: TOGGLE_FIRSTENTRY
				})
			).toEqual(
				{
					firstentry: true
				}
			)
	})
})
