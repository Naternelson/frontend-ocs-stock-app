import { createSlice } from "@reduxjs/toolkit";

export default function(name, inputs){
    const initialState = {}
    for(let i in inputs) initialState[i] = {value: inputs[i], error: false}

    return createSlice({
        name, 
        initialState,
        reducers: {
            changed: (s, a) => {
                const {name, value} = a.payload 
                s[name]["value"] = value 
                s[name]["error"] = false
            },
            cleared: () => {
                return initialState
            },
            verified: (state, action) => {
                let {name, error} = action.payload
                state[name]["error"] = error
            }
        }
    })
}


