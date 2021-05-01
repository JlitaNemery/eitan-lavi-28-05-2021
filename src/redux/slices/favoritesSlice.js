export const setFavorites = (favorites) =>{
    return{
        type:'favorites/setFavorites',
        payload:favorites
    }
}

const initialFavorites = [];
export const favoritesReducer = (state = initialFavorites, action) =>{
    switch(action.type){
        case 'favorites/setFavorites':
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}

export const selectFavorites = (state => state.favorites);