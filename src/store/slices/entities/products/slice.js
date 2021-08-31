import { createSlice } from "@reduxjs/toolkit";
const initialState =  {}
const slice = createSlice({
    name: 'newProductForm',
    initialState,
    reducers: {
        changed: (s, a) => {
            const {name, value} = a.payload 
            s[name] = value 
        },
        cleared: () => {
            return initialState
        }
    }
})

export default slice.reducer
export const {changed, cleared} = slice.actions