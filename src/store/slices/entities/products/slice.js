
import standardEntity from "../../helpers/standardEntitySlice";

const productSlice = standardEntity({
    attributes: ["name", "sku", "description"],
    name: "products",
    indexes: ["sku"]
})
export default productSlice.reducer
export const {add,modify,remove,addAttribute,removeAttribute,addIndex,removeIndex,resetData} = productSlice.actions 