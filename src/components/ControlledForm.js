import ControlledInput from "./ControlledForm/ControlledInput";
import FormPropHelper from "./ControlledForm/FormPropHelper";
const ControlledForm = props => {
    const {submit} = props

    const submitHandler = e => {
        e.preventDefault();
        if (submit) submit()
        console.group("A Form was submitted", e)
    }
    return <form onSubmit={submitHandler}>
        {props.children}
    </form>
}

export default ControlledForm
export {ControlledInput, FormPropHelper}