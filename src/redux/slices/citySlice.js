export const setCity = (city) =>{
    return{
        type:'city/setCity',
        payload:city
    }
}

const initialCity = {};
export const cityReducer = (state = initialCity, action) =>{
    switch(action.type){
        case 'city/setCity':
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}

export const selectCity = (state => state.city);