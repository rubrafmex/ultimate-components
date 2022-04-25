// uncomment code to test:

// import React, {useEffect, useState} from "react";

// this code appears in https://app.ultimatecourses.com/course/react-basics/javascript-closures-and-the-useeffect-hook
// shows usage of useEffect with errors: 1 because of closures (which make our code to print always 1) and with time variable, it needs to be added to the dependency array since it is declared in the scope of our component.

// const StopwatchWithErrors = () => {
//     const [time, setTime] = useState(0)
//
//     useEffect(() => {
//             const interval = setInterval(() => {
//                 setTime(time + 1);
//                 console.log(time);
//             }, 1000);
//
//             return () => {
//                 clearInterval(interval) // keep in mind to always clear your intervals if you started them
//             };
//         }, [] // run side effect only once when component mounts
//     );
//
//     return (
//         <section className="stopwatch-frame">
//             <h1>Ultimate Stopwatch</h1>
//             <span>{time}</span>
//         </section>
//     );
// };
//
// export default StopwatchWithErrors;