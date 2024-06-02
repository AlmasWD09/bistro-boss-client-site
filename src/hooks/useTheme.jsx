import { useEffect, useState } from "react";




const useTheme = () => {
 const [mode,setMode] = useState('light');

 const handleChangeTheme = () =>{
    const html = document.documentElement

    if(mode === 'light'){
        html.classList.remove('light')
        html.classList.add('dark')
        setMode('dark');
        localStorage.setItem('mode','dark')
    }
    else{
        html.classList.remove('dark')
        html.classList.add('light')
        setMode('light');
        localStorage.setItem('mode','light')
    }
 }
 useEffect(()=>{
    const currentMode = localStorage.getItem('mode')
    document.documentElement.classList.add(currentMode)
    setMode(currentMode)
 },[])
 return {handleChangeTheme,mode}
};

export default useTheme;