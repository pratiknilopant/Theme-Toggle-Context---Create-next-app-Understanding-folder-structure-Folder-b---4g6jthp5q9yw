'use client'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
       <>
        <button id='global-theme-toggler' className={`btn ${theme ? "btn-light txt-light" : "btn-dark txt-dark"}`} onClick={setTheme}>Switch to {theme ? "dark" : "light"} theme</button>
       </>
    )

}
export {ThemeToggleButton}