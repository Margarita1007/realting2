import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface SettingState {
    lang: string,
    currency: string

}

const initialState: SettingState = {
    lang: 'EN',
    currency: 'USD'
}

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<string>) => {
            state.lang = action.payload;
        },
        setCurrency: (state, action: PayloadAction<string>) => {
            state.currency = action.payload;
        },
    }
})

export const { setLang, setCurrency } = settingSlice.actions;

export const selectSettingState = (state: RootState) => state.setting;

export default settingSlice.reducer;