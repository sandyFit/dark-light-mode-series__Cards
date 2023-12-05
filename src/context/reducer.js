export const TOGGLE_THEME = 'TOGGLE_THEME'

export const reducer = (state, action) => {
    switch (action.type)
    {
        case TOGGLE_THEME:
            return {
                ...state, theme: state.theme === 'light' ? 'dark' : 'light'
            }
        
        default:
            return state
    }
}