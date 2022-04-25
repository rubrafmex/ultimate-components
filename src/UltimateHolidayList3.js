import React from "react";

const sourceObj = {
    val1: 'Value 1',
    val2: 'Value 2',
    val3: 'Value 3',
    val4: 'Value 4'
}

// Advice: State must be immutable, so only use array functions that are immutable themselves and return new arrays instead of modifying the original one.

const UltimateHolidayList3 = () => {
    return (
        <section>
            <h1>Ultimate holiday destinations 3</h1>
            <ol>
                {Object.keys(sourceObj).map(key =>
                    <li key={key}>{sourceObj[key]}</li>
                )}
            </ol>
        </section>
    );
}

export default UltimateHolidayList3;