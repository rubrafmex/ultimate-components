import React, {useState} from "react";
import './form.css'

const initialState = {
    firstName: '',
    lastName: '',
    bio: '',
    transport: '',
    agree: false,
    breakfast: false,
    lunch: false,
    dinner: false,
    shirtSize: '',
};

const FormEx6 = () => {
    const [formState, setFormState] = useState(initialState)

    const onChangeHandler = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormState({
            ...formState, // state must remain immutable, so DO NOT modify previous state, instead here we create a new one
            [e.target.name]: value, // here we add new property with the name, we use the name because later we will work with autogenerated ids, so here we use the name
        });
    };

    const onSubmitHandler = e => {
        // IMPORTANT:
        e.preventDefault(); // This will instruct the browser not to run its standard event code for this event,
        // in this case, preventDefault() will avoid reloading the page and changing the url when the form is submitted (which is standard event code for submit form event).
        // These actions would reset our React state, and that is not something we want.
        console.log(formState);
    };

    const onClickHandler = () => {
        setFormState(initialState);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName"
                   name="firstName"
                   onChange={onChangeHandler}
                   value={formState.firstName}/>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName"
                   name="lastName"
                   onChange={onChangeHandler}
                   value={formState.lastName}/>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio"
                      name="bio"
                      rows="10"
                      onChange={onChangeHandler}
                      value={formState.bio}/>
            <label htmlFor="transport">Preferred Transport</label>
            <select
                id="transport"
                name="transport"
                onChange={onChangeHandler}
                value={formState.transport}
            >
                <option>None selected</option>
                <option value="planes">Planes</option>
                <option value="trains">Trains</option>
                <option value="cars">Cars</option>
                <option value="boats">Boats</option>
            </select>
            <fieldset>
                <legend>Select your meals</legend>
                <input
                    type="checkbox"
                    id="breakfast"
                    name="breakfast"
                    onChange={onChangeHandler}
                    checked={formState.breakfast}
                />
                <label htmlFor="breakfast">Breakfast</label>
                <input
                    type="checkbox"
                    id="lunch"
                    name="lunch"
                    onChange={onChangeHandler}
                    checked={formState.lunch}
                />
                <label htmlFor="lunch">Lunch</label>
                <input
                    type="checkbox"
                    id="dinner"
                    name="dinner"
                    onChange={onChangeHandler}
                    checked={formState.dinner}
                />
                <label htmlFor="dinner">Dinner</label>
            </fieldset>
            <fieldset>
                <legend>T-shirt size</legend>
                <input
                    type="radio"
                    id="sizeS"
                    name="shirtSize"
                    value="s"
                    onChange={onChangeHandler}
                    checked={formState.shirtSize === 's'}
                />
                <label htmlFor="sizeS">Small</label>
                <input
                    type="radio"
                    id="sizeM"
                    name="shirtSize"
                    value="m"
                    onChange={onChangeHandler}
                    checked={formState.shirtSize === 'm'}
                />
                <label htmlFor="sizeM">Medium</label>
                <input
                    type="radio"
                    id="sizeL"
                    name="shirtSize"
                    value="l"
                    onChange={onChangeHandler}
                    checked={formState.shirtSize === 'l'}
                />
                <label htmlFor="sizeL">Large</label>
            </fieldset>
            <label htmlFor="agree">I agree to the TOC</label>
            <input
                type="checkbox"
                id="agree"
                name="agree"
                onChange={onChangeHandler}
                checked={formState.agree}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={onClickHandler}>Clear values</button>
        </form>
    );
};

export default FormEx6;