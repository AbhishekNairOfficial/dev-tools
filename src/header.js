import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div>
            <h2 className='title'>Chrome Dev Tools Tutorial</h2>
            <div className='container'>
                <NavLink className='link' exact to="/elements" activeStyle={{color: '#000'}}>
                Elements
                </NavLink>
                <NavLink className='link' to="/console" activeStyle={{color: '#000'}}>
                Console
                </NavLink>
                <NavLink className='link' to="/sources" activeStyle={{color: '#000'}}>
                Sources
                </NavLink>
                <NavLink className='link' to="/network" activeStyle={{color: '#000'}}>
                Network
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
