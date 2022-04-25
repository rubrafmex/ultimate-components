// fixing errors without refs

import React, {useEffect, useState} from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [counterActive, setCounterActive] = useState(true)

    useEffect(() => {
            let interval = null;

            if (counterActive) {
                interval = setInterval(() => {
                    // here we can use the function, and we do not need refs
                    setTime(t => t + 1);
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

export default Stopwatch;