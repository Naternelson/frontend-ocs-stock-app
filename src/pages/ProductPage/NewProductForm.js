import ControlledInput from "../../components/ControlledForm/ControlledInput"
import ControlledForm from "../../components/ControlledForm"
import SubmitButton from "../../components/Button/SubmitButton"

const NewProductForm = props => {
    return <ControlledForm>
        <h2>New Product</h2>
        <ControlledInput name={"name"} id={"product-name-input"} label={"Product Name"}/>
        <ControlledInput name={"sku"} id={"product-sku-input"} label={"Product SKU"}/>
        <ControlledInput name={"description"} id={"product-name-input"} label={"Product Description"}/>
        <SubmitButton/>
    </ControlledForm>
}

export default NewProductForm