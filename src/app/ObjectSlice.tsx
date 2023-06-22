import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PropertyType, PropertyTypeWithGeo } from "../types";

interface ObjectsI {
    objects: PropertyType[],
    objectsGeo: PropertyTypeWithGeo[]
}

const initialState: ObjectsI = {
    objects: [],
    objectsGeo: []
}


export const objectSlice = createSlice({
    name: 'objects',
    initialState,
    reducers: {
        setObject: (state, action: PayloadAction<PropertyType[]>) => {
            state.objects = action.payload;
        },
        setGeoToObj: (state, action: PayloadAction<PropertyType[]>) => {
            const newObj: PropertyTypeWithGeo[] = action.payload.map((item) => {
                if (item.values['55'].value.length) {
                    const coordinates: [number, number] = item.values['55'].value[0].recordValues['45'].split(',').map((geo: string) => Number(geo))
                    return {
                        id: item.id,
                        values: item.values,
                        geo: coordinates
                    }
                } else {
                    return {
                        id: item.id,
                        values: item.values,
                        geo: [0, 0]
                    }
                }
            })
            state.objectsGeo = newObj
        }
    }
})

export const { setObject, setGeoToObj } = objectSlice.actions;

export const selectObjectState = (state: RootState) => state.setting;

export default objectSlice.reducer;