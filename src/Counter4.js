import React, {Fragment, useState, useEffect} from "react";

const subscribe = () => {
    console.log('subscribed');
};

const unsubscribe = () => {
    console.log('unsubscribed');
};

const Counter4 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
            document.title = `Counter set to ${counter} | Ultimate Counter`;
        },
        [counter]
    );

    useEffect(() => {
            subscribe();

            // how about to execute side effect code when a component is unmounted, that is when it is removed from the React dom and from the browser dom
            // If we return a function from our useEffect, this becomes a cleaning function
            return () => {
                unsubscribe()
            };

        }, [] // will make to run our side effect only once when the component is mounted.
        //
        // Why we did not have to put subscribe function inside the dependency array?
        //
        // Because it was declared outside the render scope of the Counter4 component, it is not part of the
        // component function, and therefore we can treat it as a true constant and does not have to be part of this dependency array.
        //
        // This is also a common practice, if we have a side effects that does not use anything inside of our components, it is often a good idea
        // to move it outside of the component, making code easier to read. Just like what we have here, using a function that is declared outside
        // our component.
    );

    const onCountClickHandler = () => {
        setCounter(c => c + 1)
    };

    return (
        <Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onCountClickHandler}>
                Increment
            </button>
        </Fragment>
    );
};

export default Counter4;