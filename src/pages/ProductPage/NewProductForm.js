import React from "react"
import { useDispatch, useSelector } from "react-redux"
import ControlledInput from "../../components/ControlledForm/ControlledInput"
import ControlledForm from "../../components/ControlledForm"
import SubmitButton from "../../components/Button/SubmitButton"

import { changed, verified } from "../../store/slices/pages/product/newFormSlice"
import {add} from "../../store/slices/entities/products/slice"
import UniqueIdGenerator from "../../utilities/uniqueId"

const NewProductForm = props => {
    const dispatch = useDispatch()
    const formInputs = useSelector(s => s.pages.products.newProductForm)
    const idGen = new UniqueIdGenerator()
    const submitFn = ()=> {
        
        const payload = {id: idGen(), ...formInputs}
        dispatch(add(payload))
    }
    const selectorFn = (aspect) => {
        const arr = ["pages", "products", "newProductForm", aspect]
        return arr.join(".")
    }

    return <ControlledForm submit={submitFn}>
        <h2>New Product</h2>
        <ControlledInput name={"name"} id={"product-name-input"} label={"Product Name"} selector={selectorFn("name")}  action={changed} verify={verified} condition={(s)=> s.length > 5} errorMessage={"You done messed up A-Aron"}/>
        <ControlledInput name={"sku"} id={"product-sku-input"} label={"Product SKU"} selector={selectorFn("sku")} action={changed} verify={verified}/>
        <ControlledInput name={"description"} id={"product-name-input"} label={"Product Description"} selector={selectorFn("description")} action={changed} verify={verified}/>
        <SubmitButton/>
    </ControlledForm>
}

export default NewProductForm
