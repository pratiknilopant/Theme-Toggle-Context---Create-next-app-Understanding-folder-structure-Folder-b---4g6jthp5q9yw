'use client'
import React,{useState} from 'react';

const ThemeContext = React.createContext({
    theme: true,
    setTheme : ()=>{}
})
const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState(true);

    function handleTheme(){
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{theme:theme, setTheme: handleTheme}}>
            <React.Fragment>
                {children}
            </React.Fragment>
        </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext}
