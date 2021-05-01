export const setSearchResults = (objArray) =>{
    return{
        type:'searchResults/setSearchResults',
        payload:objArray
    }
}

const initial = [];
export const searchResultsReducer = (state = initial, action) =>{
    switch(action.type){
        case 'searchResults/setSearchResults':
            return action.payload;
        default:
            return state;
    }
}

export const selectSearchResults = (state => state.searchResults);