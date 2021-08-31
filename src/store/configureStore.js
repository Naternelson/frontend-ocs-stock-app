import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/reducer"

export default function(){
    return  configureStore({
        reducer
    })
}