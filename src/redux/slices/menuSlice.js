export const setMenuToggle = (bool) =>{
    return{
        type:'menu/setToggle',
        payload:bool
    }
}

const initialType = false;
export const menuToggleReducer = (state = initialType, action) =>{
    switch(action.type){
        case 'menu/setToggle':
            return action.payload;
        default:
            return state;
    }
}

export const selectMenuToggle = (state => state.menuToggle);