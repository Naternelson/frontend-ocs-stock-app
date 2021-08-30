import FormPropHelper from "./FormPropHelper"
const ControlledInput = props => {
    let {id, name, label, style, change} = FormPropHelper(props)
    style = style + " input-group"
    const changeHandler = e => {
        console.group("Change Occurred in input", e)
        if(change) change(e.target.value)
    }
    return <div className={style}>
        <label for={name}>{label}</label>
        <input name={name} id={id} onChange={changeHandler}></input>
    </div>
}

export default ControlledInput