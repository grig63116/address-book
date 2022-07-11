import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import reducer from './reducers';

const store = configureStore({
    reducer: reducer,
});

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppState,
    unknown,
    Action<string>>

export default store;