import { createSlice } from "@reduxjs/toolkit";
const initialState =  {
    name: "",
    sku: "",
    description: ""
}
const slice = createSlice({
    name: 'newProductForm',
    initialState,
    reducers: {
        inputChanged: (s, a) => {
            const {name, value} = a.payload 
            s[name] = value 
        },
        inputCleared: () => {
            return initialState
        }
    }
})

export default slice
export const {inputChanged, inputCleared} = slice.actions