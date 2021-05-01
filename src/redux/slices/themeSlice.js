export const setTheme = (theme) =>{
    return{
        type:'theme/setTheme',
        payload:theme
    }
}

const initial = 'Dark';
export const themeReducer = (state = initial, action) =>{
    switch(action.type){
        case 'theme/setTheme':
            return action.payload ? action.payload : initial;
        default:
            return state;
    }
}

export const selectTheme = (state => state.theme);