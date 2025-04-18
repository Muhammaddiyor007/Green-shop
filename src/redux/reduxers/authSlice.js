import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	openAuth: false,
}

const authSlice = createSlice({
	name: 'isOpenAuth',
	initialState,
	reducers: {
		openAuthFun: (state) => {
			state.openAuth = true
		},
		closeAuthFun: state => {
			state.openAuth = false
		},
	},
})

export const { openAuthFun, closeAuthFun } = authSlice.actions

export default authSlice.reducer