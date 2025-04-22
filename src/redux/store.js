import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reduxers/AutheSlice'
import modalReducer from './reduxers/authSlice'
import defoldArrSlice from './reduxers/defoldArrSlice'
import menuReducer from './reduxers/menuSlice'
import tabsReducer from './reduxers/tabsSlice'

export const Store = configureStore({
	reducer: {
		auth: authReducer,
		menu: menuReducer,
		modal: modalReducer,
		defoldArr: defoldArrSlice,
		tabs: tabsReducer,
	},
})