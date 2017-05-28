import * as types from '../../src/constants/actionTypes';
import display from '../../src/reducers/display';

describe('display', () => {
	it('should handle undefined action', () => {
		expect(
			display({display:"",},
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
			display({display:""},
				{
					type: types.UPDATE_DISPLAY,
					payload: "1"
				})
			).toEqual(
				{
					display: "1",
				}
			)
		expect(
			display({display:"1"},
				{
					type: types.UPDATE_DISPLAY,
					payload: "0"
				})
			).toEqual(
				{
					display: "10",
				}
			)
		expect(
			display({display:"10"},
				{
					type: types.UPDATE_DISPLAY,
					payload: "1"
				})
			).toEqual(
				{
					display: "101",
				}
			)
	})
	it('should handle RESULT_DISPLAY', () => {
		expect(
			display({display:"1"},
				{
					type: types.RESULT_DISPLAY,
					payload: "2"
				})
			).toEqual(
				{
					display: "2",
				}
			)
	})
	it('should handle CLEAR_DISPLAY', () => {
		expect(
			display({display:"2"},
				{
					type: types.CLEAR_DISPLAY
				})
			).toEqual(
				{
					display: "0",
				}
			)
	})
})
