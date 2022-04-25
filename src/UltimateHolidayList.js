import React from "react";

const list = [
    {name: 'The Beach'},
    {name: 'The mountains'},
    {name: 'Cities'},
    {name: 'Ultimate survival'}
]

const UltimateHolidayList = () =>
    <section>
        <h1>Ultimate holiday destinations</h1>
        <ul>{list.map(item => (
                <li>{item.name}</li>
            )
        )}</ul>
    </section>;

export default UltimateHolidayList;