import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './SettingSlice';
import objectReducer from './ObjectSlice';


export const store = configureStore({
    reducer: {
        setting: settingReducer,
        objects: objectReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;