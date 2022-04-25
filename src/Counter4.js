import React, {Fragment, useState, useEffect} from "react";

const subscribe = count => {
    console.log(`Subscribed for ${count}`);
};

const unsubscribe = count => {
    console.log(`Unsubscribed for ${count}`);
};

const Counter4 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
            document.title = `Counter set to ${counter} | Ultimate Counter`;
        },
        [counter]
    );

    useEffect(() => {
            subscribe(counter)
            return () => {
                unsubscribe(counter)
            };
        },
        [counter]
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