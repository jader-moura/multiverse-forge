import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalDialog from './modalDialog';
import user from './user';
import { setupListeners } from '@reduxjs/toolkit/query';
import thunk from 'redux-thunk';

const reducer = combineReducers({
	modalDialog,
	user,
});
const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
