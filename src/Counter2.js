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
        //
        //
        // >>>>>>>> Understanding shallow dependency checks:
        //
        // As it is mentioned above, React will check everything that is inside the dependency array to see if it has changed.
        // It is Important to know that React performs a Shallow check on the dependencies, meaning that
        // it only compares values for simple types such as integers and strings, while it compares references for things such as
        // objects, arrays and functions, so a shallow check will not compare the content of a complex data type. The reason for this is performance.
        //
        //
        // Some notes over shallow check, open browser console and try:
        // const x = {val: 10}
        // const y = x // x and y will store the reference of the actual object in memory
        // x === y // will return true
        // if you modify x by doing:
        // x['val2'] = 30
        // x === y // will still be true because y will have also the new property added
        // So it is true because we compare references
        // Now we create a new object with the contents of x (we are making a copy of x)
        // const z = {...x}
        // now the contents of x and z are the same
        // x === z // this will give false, because even when contents are the same, we compare references and x and z have different references
        // This is basic javascript behaviour, and it applies to complex types such as objects, arrays and functions.
        // Base types such as strings and integers are compared by value.
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