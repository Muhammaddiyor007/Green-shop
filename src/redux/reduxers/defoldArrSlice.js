import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	defoldArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
}

const defoldArrSlice = createSlice({
	name: 'defoldArr',
	initialState,
	reducers: {
		setDefoldArr: (state, action) => {
			state.defoldArr.pop(action.payload)
		},
		resetDefoldArr: state => {
			state.defoldArr = []
		},
	},
})

export const { setDefoldArr, resetDefoldArr } = defoldArrSlice.actions

export default defoldArrSlice.reducer