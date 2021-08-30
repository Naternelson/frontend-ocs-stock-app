const ControlledForm = props => {
    const submitHandler = e => {
        e.preventDefault();
        console.group("A Form was submitted", e)
    }
    return <form onSubmit={submitHandler}>
        {props.children}
    </form>
}

export default ControlledForm