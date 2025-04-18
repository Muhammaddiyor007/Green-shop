import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0, // Значение текущего таба
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setTabValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setTabValue } = tabsSlice.actions;

export const selectTabValue = (state) => state.tabs.value;

export default tabsSlice.reducer;