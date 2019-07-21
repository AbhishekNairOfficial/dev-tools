import React, { useState } from 'react';
import axios from 'axios';

const Network = () => {
    const [data, setData ] = useState('Hi, this is preloaded');
    const getRandomData = async () => {
        const result = await axios.get('https://api.myjson.com/bins/sd4ad');
        const lol = result.data.map((item, key)=>{
            return(
                <p style={styles.paragraph} key={key}>{item}</p>
            )
        });
        setData(lol);
    }
    return (
        <div>
            <button onClick={()=>{getRandomData()}}>Click here to download data from a server online</button>
            <button onClick={()=>{setData('Clear!')}}>Click here to clear data</button>
            <div style={styles.container}>{data}</div>
        </div>
    );
}

const styles = {
    container: {
        padding: '10px'
    },
    paragraph: {
        color: '#333',
        fontSize: '1.2em'
    }
};

export default Network;