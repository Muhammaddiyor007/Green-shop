import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
	name: localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : 'Login',
	surname: localStorage.getItem('surname') ? JSON.parse(localStorage.getItem('surname')) : '',
	email: localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			const { token, name, surname, email } = action.payload;

			state.token = token;
			state.name = name;
			state.surname = surname;
			state.email = email;


			localStorage.setItem('token', JSON.stringify(token));
			localStorage.setItem('name', JSON.stringify(name));
			localStorage.setItem('surname', JSON.stringify(surname));
			localStorage.setItem('email', JSON.stringify(email));
		},
		logout: (state) => {
			state.token = null;
			state.name = 'Login';
			state.surname = '';
			state.email = '';

			localStorage.removeItem('token');
			localStorage.removeItem('name');
			localStorage.removeItem('surname');
			localStorage.removeItem('email');
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;