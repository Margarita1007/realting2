import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './SettingSlice';


export const store = configureStore({
    reducer: {
        setting: settingReducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;