export const setFavoritesData = (favoritesData) =>{
    return{
        type:'favoritesData/setFavoritesData',
        payload:favoritesData
    }
}

const initialFavoritesData = [];
export const favoritesDataReducer = (state = initialFavoritesData, action) =>{
    switch(action.type){
        case 'favoritesData/setFavoritesData':
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}

export const selectFavoritesData = (state => state.favoritesData);