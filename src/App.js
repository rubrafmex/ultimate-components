import React, {useState} from 'react';
import './machine.css';
import Counter4 from "./Counter4";

const App = () => {
    const [show, setShow] = useState(true)

    const onClickHandler = () => {
        setShow(s => !s)
    }

    return (
        <main>
            <h1>Ultimate Counter</h1>
            {show && <Counter4/>}
            <button type="button" onClick={onClickHandler} aria-pressed={!show}>
                Hide/Show
            </button>
        </main>
    );
};

export default App;