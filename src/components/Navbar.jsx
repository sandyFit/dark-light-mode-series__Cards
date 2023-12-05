import React, { useContext } from 'react'
import '../assets/css/nav.css'
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { GlobalContext } from '../context/ThemeContext';

const Navbar = () => {

  const { theme, toggleTheme } = useContext(GlobalContext)
  
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="nav-box">
        <h2 className="logo">LoGo</h2>
        <button onClick={toggleTheme}>
          { theme === 'dark' ? <DarkModeIcon/> : <LightModeIcon />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
