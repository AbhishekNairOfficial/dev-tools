import React, { useEffect } from 'react';
import './Console.css';

const mountMessage = 'The Component has been mounted';
const renderMessage = 'The Component has rendered';
const printAnError = () => {
    console.error(
        '%c Error!!!! Someone has stolen all the Litchi juice from the fridge!!',
        'font-size: 20px'
    );
    return;
};
const printAWarning = () => {
    console.warn(
        '%c Warning!!!! There are 4 more days to friday!!',
        'font-size: 20px'
    );
    return;
};

const logSomething = () => {
    console.log('Test Message');
};

function Console() {
    useEffect(() => {
        console.log(mountMessage);
    }, []);
    return (
        <h2>
            Hi, I am the Console Page
            {console.log(renderMessage)}
            <section>
                <button onClick={() => logSomething()}>
                    Click Me to Print something
                </button>
                <button onClick={() => printAWarning()}>
                    Click Me to Show a Warning
                </button>
                <button onClick={() => printAnError()}>
                    Click Me to Show an Error
                </button>
            </section>
            <section>
                <button onClick={() => console.count()}>
                    Click Me to Start a count
                </button>
            </section>
        </h2>
    );
}

export default Console;
