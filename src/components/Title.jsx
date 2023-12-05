import React, { useContext } from 'react'
import '../assets/css/title.css'
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { GlobalContext } from '../context/ThemeContext'

const Title = () => {

    const { theme } = useContext(GlobalContext)

    return (
			<h1 className="title">
				Dark - Light M
				<span>
					{ theme === 'dark' ? <DarkModeIcon/> : <LightModeIcon />}
                </span>
                de
			</h1>
		);
}

export default Title