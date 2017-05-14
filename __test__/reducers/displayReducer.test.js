import * as types from '../../src/constants/actionTypes';
import displayReducer from '../../src/reducers/displayReducer';

describe('displayReducer', () => {
	it('should handle undefined action', () => {
		expect(
			displayReducer({display:"",},
				{
					type: undefined
				})
		).toEqual(
			{
				display: ""
			}
		)
	})
	it('should handle UPDATE_DISPLAY', () => {
		expect(
			displayReducer({display:""},
				{
					type: types.UPDATE_DISPLAY,
					payload: "1"
				})
			).toEqual(
				{
					display: "1",
					firstentry: false
				}
			)
		expect(
			displayReducer({display:"1"},
				{
					type: types.UPDATE_DISPLAY,
					payload: "+"
				})
			).toEqual(
				{
					display: "1+",
					firstentry: false
				}
			)
		expect(
			displayReducer({display:"1+"},
				{
					type: types.UPDATE_DISPLAY,
					payload: "1"
				})
			).toEqual(
				{
					display: "1+1",
					firstentry: false
				}
			)
	})
	it('should handle RESULT_DISPLAY', () => {
		expect(
			displayReducer({display:"1"},
				{
					type: types.RESULT_DISPLAY,
					payload: "1+1"
				})
			).toEqual(
				{
					display: 2,
					firstentry:true
				}
			)
	})
	it('should handle CLEAR_DISPLAY', () => {
		expect(
			displayReducer({display:2},
				{
					type: types.CLEAR_DISPLAY
				})
			).toEqual(
				{
					display: "",
					firstentry: true
				}
			)
	})
})