import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './reduxers/menuSlice'

export const Store = configureStore({
	reducer: {
		menu: menuReducer,
	},
})
