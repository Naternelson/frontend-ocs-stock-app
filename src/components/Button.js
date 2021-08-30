import SubmitButton from "./Button/SubmitButton";

const Button = props => {
    let {label} = props
    label = label ? label: "Button"
    return <button type={"button"}>{label.toUpperCase()}</button>
}
export default Button
export {SubmitButton}