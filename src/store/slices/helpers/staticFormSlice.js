import { createSlice } from "@reduxjs/toolkit";

export default function(name, initialState){
    return createSlice({
        name, 
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
}


