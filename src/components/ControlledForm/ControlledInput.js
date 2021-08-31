import FormPropHelper from "./FormPropHelper"
import { useDispatch, useSelector } from "react-redux"

const ControlledInput = props => {
    let {id, name, label, style, change, selector, action, condition} = FormPropHelper(props)
    // console.log({selector, props})
    const state = useSelector(selector)
    const dispatch = useDispatch()
    condition = condition || function(){return true}

    style = style ? style + " input-group" : "input-group"
    const changeHandler = e => {
        try{
            const {value, name} = e.target
            console.group("Change Occurred in input", name, value)
            if(change) change(value)
            if(action && condition(value)) dispatch(action({name: e.target.name.toLowerCase(), value}))
        } catch (err){
            console.error(err)
        }
    }
    return <div className={style}>
        <label htmlFor={name}>{label}</label>
        <input name={name} id={id} onChange={changeHandler} value={state}></input>
    </div>
}

export default ControlledInput