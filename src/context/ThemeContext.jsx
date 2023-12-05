import { createContext, useEffect, useReducer } from "react"
import { reducer } from "./reducer"


export const initialState = {
    theme: 'light'
}

export const GlobalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { theme } = state

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }

    return (
        <GlobalContext.Provider value={{theme, toggleTheme}}>
            { children }
        </GlobalContext.Provider>
    )
}
