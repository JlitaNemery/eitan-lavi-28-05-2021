export const setActiveView = (view) =>{
    return{
        type:'activeView/setActiveView',
        payload:view
    }
}

const initialView = 'Main';
export const activeViewReducer = (state = initialView, action) =>{
    switch(action.type){
        case 'activeView/setActiveView':
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}

export const selectActiveView = (state => state.activeView);