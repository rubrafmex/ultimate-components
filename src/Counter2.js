import React, {Fragment, useState, useEffect} from "react";

const Counter2 = () => {
    const [counter, setCounter] = useState(0);
    const [, setInternalCount] = useState(0);

    useEffect(() => {
            // important:
            // This hook is called by react every time the component is rendered, BUT
            // it is called asynchronously after the component has been rendered already.\
            // So this does not block the rendering of the component, and it is executed as soon as possible after the rendering.
            // This is better for performance.

            // side effect code we want to run:
            document.title = `Counter set to ${counter} | Ultimate Counter`;
            console.log('Title was set');
        },
        [counter] // important: Passing counter as dependency tells react to only run the callback effect only when counter changes,
        // so even when the component is rendered again and again, if counter does not change then the useEffect effect code will not be executed.
        //
        // We can pass several dependencies, and they can be any valid value in javascript, the useEffect function is still processed on each render,
        // BUT the callback will only be executed if any of the dependencies in the array changes.
    )

    const onCountClickHandler = () => {
        setCounter(c => c + 1)
    }

    const onInternalCountClickHandler = () => {
        setInternalCount(c => c + 1)
    }

    console.log('Main render return');

    return (
        <Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onCountClickHandler}>
                Increment
            </button>
            <button type="button" onClick={onInternalCountClickHandler}>
                Increment internal count
            </button>
        </Fragment>
    );
};

export default Counter2;