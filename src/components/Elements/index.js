import React from 'react';
import './Elements.css';

const Elements = () => {
    return (
        <div className='element-container'>
            <h2>Color me Red</h2>
            <br />
            <h3>Random Paragraph</h3>
            <p className='paragraph'>{randomParagraph()}</p>
            <br />
            <h2>Scroll me into View!!!</h2>
            <br />
            <h2 className='clickableTitle' onClick={e=>changeColorOnClick(e)}>Click me to see what Happens!</h2>
            <br />
            <h2 className='hoverAble'>Quick! Hover over me :)</h2>
            <br />
            <h2>Hide me with a shortCut</h2>
        </div>
    );
}

export default Elements;

const randomParagraph = () => {
    const text = 'Lorem ipsum dolor xsit amet consectetur adipiscing elit.';
    return text.repeat(50);
};

const changeColorOnClick = (e) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.currentTarget.style.color = '#' + randomColor;
}