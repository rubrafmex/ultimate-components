import React, {useEffect, useState, useRef} from "react";

const StopwatchFixingWithRefs = () => {
    const [time, setTime] = useState(0);
    const [counterActive, setCounterActive] = useState(true)

    // to fix the error in dependency array:
    // the ref container is like an instance fields in javascript, React knows that this ref container stays the same amongst all renders
    const currentTime = useRef(0); // react gives this hook to access a mutable value that is managed by React and shared by all render calls

    useEffect(() => {
            let interval = null;

            if (counterActive) {
                interval = setInterval(() => {
                    // using the ref container and removing the usage of 'time' directly in our useEffect will remove the error in our dependency array
                    // IMPORTANT:
                    // setting refs does not re-render components
                    currentTime.current++
                    setTime(currentTime.current);
                }, 1000);
            }

            return () => {
                clearInterval(interval) // keep in mind to always clear your intervals if you started them
            };
        }, [counterActive]
    );

    const onClickHandler = () => {
        setCounterActive(c => !c)
    }

    // the aria-pressed={!counterActive} is because it is a toggle button, and it is !counterActive because it starts active
    return (
        <section className="stopwatch-frame">
            <h1>Ultimate Stopwatch</h1>
            <span>{time}</span>
            <button type="button" onClick={onClickHandler} aria-pressed={!counterActive}>
                Stop/Start
            </button>
        </section>
    );
};

export default StopwatchFixingWithRefs;