'use client'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

// export const LocalThemeContext = React.createContext({
//     theme: {value : 0},
//     setTheme : ()=>{}
// })
const LocalThemedBox = () => {

    // const [theme,setTheme] = React.useState({value : 0});
    
    // function handleTheme(){
    //     setTheme((oldTheme)=>{
    //         const newTheme = {...oldTheme};
    //         newTheme.value = newTheme.value === 0 ? 1 : 0;
    //         return newTheme;
    //     })
    // }
        const[value,setValue] = useState(true);
        const{theme} = useContext(ThemeContext)
        useEffect(()=>{
            theme ? setValue(true) : setValue(false)
        },[theme])
return(
    // <LocalThemeContext.Provider value={{theme: theme, setTheme: handleTheme}}>
    <div className={value ? 'bg-light':'bg-dark'} style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <p id='local-themed-text-container' className={value ? 'txt-light':'txt-dark'}>Hii</p>
        <button id='local-theme-toggler' className={`btn ${value ? "btn-light txt-light" : "btn-dark txt-dark"}`} onClick={()=>{
            setValue(!value)
        }}>Toggle local theme to {value ? 'dark' : "light"}</button>
       
    </div>
    // </LocalThemeContext.Provider>
)
}

export { LocalThemedBox }