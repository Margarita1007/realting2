import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PropertyType } from "../types";

interface ObjectsI {
    objects: PropertyType[]
}

const initialState: ObjectsI = {
    objects: []
}


export const objectSlice = createSlice({
    name: 'objects',
    initialState,
    reducers: {
        setObject: (state, action: PayloadAction<PropertyType[]>) => {
            state.objects = action.payload;
        }
    }
})

export const { setObject } = objectSlice.actions;

export const selectObjectState = (state: RootState) => state.setting;

export default objectSlice.reducer;