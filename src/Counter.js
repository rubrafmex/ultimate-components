import React, {useState} from "react";
import CounterView from "./CounterView";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onIncrementHandler = () => {
        setCounter(counter + 1)
    }

    return (
        <CounterView
            counterValue={counter}
            onIncrement={onIncrementHandler}
        />
    );
};

export default Counter;