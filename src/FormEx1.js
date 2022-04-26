import React, {useState} from "react";
import './form.css'

const FormEx1 = () => {
    const [firstName, setFirstName] = useState('');

    const onChangeHandler = e => {
        // binding changes from the input into state
        setFirstName(e.target.value)
    };

    // we also want to bind changes to the state into the input (so binding 'value' prop of the input to the state)
    // now after binding input to state and state to input, React state has become
    // the single source of truth, and now we can call it a Controlled component
    return (
        <form>
            <spam>{firstName}</spam>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" onChange={onChangeHandler}
                   value={firstName}/>
        </form>
    );
};

export default FormEx1;