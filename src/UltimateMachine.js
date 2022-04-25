import React, {useState} from "react";

const ErrorMessage = ({showError}) => showError ? <span>Oh no you broke it!</span> : null

// const OnOff = ({isOn}) => {
//     if (isOn) {
//         return <OnMessage/>;
//     } else {
//         return <OffMessage/>;
//     }
// }

const UltimateMachine = () => {
    const [showError, setShowError] = useState(false);

    const onClickHandler = () => {
        setShowError(i => !i);
    };

    // let message;
    // if (isOn) {
    //     message = <OnMessage/>;
    // } else {
    //     message = <OffMessage/>;
    // }

    // const getMessage = () => {
    //     if (isOn) {
    //         return <OnMessage/>;
    //     } else {
    //         return <OffMessage/>;
    //     }
    // }

    return (
        <section>
            <h1>The Ultimate Machine</h1>
            {/*<OnOff isOn={isOn} />*/}
            {/*{message}*/}
            {/*{getMessage()}*/}
            {/*{isOn ? <OnMessage/> : <OffMessage/>}*/}
            <ErrorMessage showError={showError} />
            <button type="button" onClick={onClickHandler} aria-pressed={showError}>
                Toggle error
            </button>
        </section>
    );
};

export default UltimateMachine;