import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	anchorEl: false,
}

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setAnchorEl: (state, action) => {
			state.anchorEl = action.payload
		},
		resetAnchorEl: state => {
			state.anchorEl = false
		},
	},
})

export const { setAnchorEl, resetAnchorEl } = menuSlice.actions

export default menuSlice.reducer
