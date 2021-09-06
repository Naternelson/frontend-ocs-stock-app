import FormPropHelper from "./FormPropHelper"
import { useDispatch, useSelector } from "react-redux"
import { selectorFn } from "../../utilities/nestedObject"

const ControlledInput = props => {
    let {id, name, label, style, change, selector, blur, focus} = FormPropHelper(props)
    
    // const {
    //     dispatcher,
    //     condition,
    //     callback,
    //     onSuccess,
    //     successMessage,
    //     onError,
    //     errorMessage
    // } = change
    // const {
    //     dispatcher,
    //     condition, 
    //     callback,
    //     onSuccess,
    //     successMessage,
    //     onError, 
    //     errorMessage
    // } = blur
    
    const state = useSelector(selectorFn(selector + ".value"))
    const successMessage = useSelector(selectorFn(selector + ".successMessage"))
    const errorMessage = useSelector(selectorFn(selector + ".errorMessage"))
    const dispatch = useDispatch()
    style = style ? style + " input-group" : "input-group"

    const eventHandler = (params) => (e) => {
        try{
            const {value, name} = e.target
            const condition = change.condition || (()=>true)
            const check = condition(value)
            let successMessage, errorMessage 
            name = name.toLowerCase()
            if(check){
                const afterSuccess = params.onSuccess || (() => {})
                afterSuccess(value)
                if(params.successMessage) successMessage = params.successMessage(value)
            } else {
                const afterError = params.onError || (() => {})
                afterError(value)
                if(params.errorMessage) errorMessage = params.errorMessage(value)
            }
            if (params.dispatcher) dispatch(params.dispatcher({ name, value, error:check, errorMessage, successMessage}))
            
        } catch (err){
            console.error(err)
        }
    }



    const changeHandler = eventHandler(change)
    const blurHandler = eventHandler(blur)
    const focusHandler = eventHandler(focus)

    return <div className={style}>
        <label htmlFor={name}>{label}</label>
        <input name={name} id={id} onChange={changeHandler} onBlur={blurHandler} onFocus={focusHandler} value={state}></input>
        {successMessage && <p className={"success-message"} htmlFor={name}>{successMessage}</p>}
        {errorMessage && <p className={"error-message"} htmlFor={name}>{errorMessage}</p>}
    </div>
}

export default ControlledInput