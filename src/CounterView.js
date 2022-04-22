import React,{Fragment} from "react";

const CounterView = ({counterValue, onIncrement}) => (
    <Fragment>
        <p>{counterValue}</p>
        <button type="button" onClick={onIncrement}>Increment</button>
    </Fragment>
);

export default CounterView;