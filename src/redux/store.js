import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './reduxers/menuSlice'
import authSlice from './reduxers/authSlice'
import defoldArrSlice from './reduxers/defoldArrSlice'
import tabsReducer from './reduxers/tabsSlice'




export const Store = configureStore({
	reducer: {
		menu: menuReducer,
		isOpenAuth: authSlice,
		defoldArr: defoldArrSlice,
		tabs: tabsReducer,
	},
})