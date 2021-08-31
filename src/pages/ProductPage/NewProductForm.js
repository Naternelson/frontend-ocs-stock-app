import React from "react"
import { useDispatch, useSelector } from "react-redux"
import ControlledInput from "../../components/ControlledForm/ControlledInput"
import ControlledForm from "../../components/ControlledForm"
import SubmitButton from "../../components/Button/SubmitButton"
import getNested from "../../utilities/nestedObject"
import { changed, cleared } from "../../store/slices/pages/product/newFormSlice"
import {add} from "../../store/slices/entities/products/slice"

const NewProductForm = props => {
    const dispatch = useDispatch()
    const formInputs = useSelector(s => s.pages.products.newProductForm)
    const submitFn = ()=> {
        
        dispatch(add(formInputs))
    }
    const selectorFn = (aspect) => {
        const arr = ["pages", "products", "newProductForm", aspect]
        return getNested(...arr)
    }
    const 
    return <ControlledForm>
        <h2>New Product</h2>
        <ControlledInput name={"name"} id={"product-name-input"} label={"Product Name"} selector={selectorFn("name")}  action={changed}/>
        <ControlledInput name={"sku"} id={"product-sku-input"} label={"Product SKU"} selector={selectorFn("sku")} action={changed}/>
        <ControlledInput name={"description"} id={"product-name-input"} label={"Product Description"} selector={selectorFn("description")} action={changed}/>
        <SubmitButton/>
    </ControlledForm>
}

export default NewProductForm
