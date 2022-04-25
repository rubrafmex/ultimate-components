import React, {useState} from "react";

const list = [
    {id: 1, name: 'The Beach', topDestination: true},
    {id: 2, name: 'The mountains', topDestination: false},
    {id: 3, name: 'Cities', topDestination: true},
    {id: 4, name: 'Ultimate survival', topDestination: false}
]

const UltimateHolidayList2 = () => {
    const [showAll, setShowAll] = useState(true)

    return (
        <section>
            <h1>Ultimate holiday destinations 2</h1>
            <ul>
                {list
                    .filter(item => (showAll ? true : item.topDestination))
                    .map(item => (
                        <li key={item.id.toString()}>{item.name}</li>
                    ))}
            </ul>

            <button type="button" onClick={() => {
                setShowAll(true)
            }}>Show all
            </button>
            <button type="button" onClick={() => {
                setShowAll(false)
            }}>Show only top destinations
            </button>
        </section>);
}

export default UltimateHolidayList2;