import staticFormSlice from "../../helpers/staticFormSlice";

const initialState =  {
        name: "",
        sku: "",
        description: ""
    }
const slice = staticFormSlice("newProductForm", initialState)
export default slice.reducer
export const {changed, cleared} = slice.actions
