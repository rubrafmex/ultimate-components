import React, {Fragment, useState, useEffect} from "react";

const Counter3 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
            document.title = `Counter set to ${counter} | Ultimate Counter`;
        },
        [counter]
    )

    useEffect(() => {
            const savedCounterValue = localStorage.getItem('ultimateCounter')
            if (savedCounterValue != null) {
                setCounter(parseInt(savedCounterValue, 10))
            }
        },
        [] // by doing this, we instruct React to only execute this hook once, when the component is first mounted.
        //
        // But we are not getting an error just as we did in Counter2.js when we left the dependency array empty, why?
        // This is because we are using savedCounterValue which is declared inside useEffect function.
        //
        // Anything that we declare inside the useEffect function does not have to be part of the dependency array,
        // Only variables declared outside the useEffect hook but still inside our component function need to be part of this dependency array.
        //
        // To test this, open in browser then increment, then save counter value, and check in the inspect section of the browser > Application > Storage > Local Storage
        // then increment several times and without saving refresh the page, we will see that the saved value is loaded, so the hook is executed only
        // once when the component is first mounted.
        //
        // This shows how we can run useEffect, not only when data has been changed, but we can also run side effects once when the component mounts.
    );

    const onCountClickHandler = () => {
        setCounter(c => c + 1)
    }

    const onSaveClickHandler = () => {
        localStorage.setItem('ultimateCounter', counter)
    }

    return (
        <Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onCountClickHandler}>
                Increment
            </button>
            <button type="button" onClick={onSaveClickHandler}>
                Save counter value
            </button>
        </Fragment>
    );
};

export default Counter3;