import React, {Fragment, useState} from "react";

const list1 = [
    {id: 1, name: 'The Beach'},
    {id: 2, name: 'The mountains'},
    {id: 3, name: 'Cities'},
    {id: 4, name: 'Ultimate survival'}
]

const list2 = [
    {id: 1, name: 'The Beach'},
    {id: 3, name: 'Cities'},
    {id: 4, name: 'Ultimate survival'},
    {id: 2, name: 'The mountains'}
]

const UltimateHolidayList = () => {
    const [list, setList] = useState(list1)

    const onClickHandler = () => {
        setList(list === list1 ? list2 : list1)
    }

    return (
        <section>
            <h1>Ultimate holiday destinations</h1>
            <ul>{list.map((item, index) => (
                    // The key prop is needed for React,
                    //
                    // React will use it in its reconciliation process, and it must be something unique,
                    // if we do not set it, there will be an error in the console,
                    // If we set it, it will NOT be present in the actual browser dom.
                    //
                    // Note: It is NOT a good idea to use the 'index' property of the map function as key prop, since it is not unique,
                    // instead it is only the index of a value in the current version of the array, for example, if you swap the array
                    // then the same index will be use for another value and the application might not do what you expect, besides that
                    // the reconciler might need to perform more expensive calculations if we use index, so in short, try to avoid this as possible,
                    // and make sure to assign a unique value.
                    //
                    // If here we had used the index as key prop:
                    // <Fragment key={index}>
                    // Then the inputs would not be updated correctly
                    // because the reconciler cannot properly calculate which input should be display in which list item,
                    // so to fix it we use a property of the object itself which we know is unique.
                    <Fragment key={item.id.toString()}>
                        <li>
                            <label htmlFor={`item-${index}`}>{item.name}</label>
                            <input id={`item-${index}`}></input>
                        </li>
                    </Fragment>
                )
            )}</ul>
            <button type="button" onClick={onClickHandler}>
                Change
            </button>
        </section>);
}

export default UltimateHolidayList;