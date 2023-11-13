'use client'
import React from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext } from './components/ThemeProvider';

const Main = () => {
    
    const{theme} = React.useContext(ThemeContext)
    return(
        <div className={`container ${theme ? "bg-light" : "bg-dark"}`} id="themed-page">
            <p id="themed-text-container" className={theme ? "txt-light" : "txt-dark"}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn ${theme ? "btn-light txt-light" : "btn-dark txt-dark"}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Main }