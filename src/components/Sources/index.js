import React, { useState } from 'react';

function Sources() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [list, addToList ] = useState(['Hello']);

    function increaseTheCount() {
        setCount(count+1);
        list.splice(list.length, 0, list[0]);
        // debugger
        addToList(list);
    }
    return (
        <div>
        {/* <p>You clicked {count} times</p> */}
        <button onClick={() => increaseTheCount()}>
            Click me
        </button>
        <ol>
            {list.map((item, key) => {
                return (
                    <li key={key}>{item}</li>
                );
            })}
        </ol>
        </div>
    );
}

export default Sources;