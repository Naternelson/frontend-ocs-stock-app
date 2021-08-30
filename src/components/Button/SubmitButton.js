const SubmitButton = props => {
    let {label} = props
    label = label ? label: "Submit"
    return <button type={"sumbit"}>{label.toUpperCase()}</button>
}
export default SubmitButton