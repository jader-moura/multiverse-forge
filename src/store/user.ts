import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

interface User {
	isAuthenticated: false;
	name: string;
}

const user: User = {
	isAuthenticated: false,
	name: '',
};

const slice = createSlice({
	name: 'user',
	initialState: user,
	reducers: {
		resetUseer: (state) => {
			state = { ...user };
		},
	},
});

export const selectUserAuthStatus = (state: RootState) =>
	state.user.isAuthenticated;

export const { resetUseer } = slice.actions;
export default slice.reducer;
