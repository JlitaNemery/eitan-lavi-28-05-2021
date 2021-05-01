export const setSearchKey = (searchKey) =>{
    return{
        type:'searchKey/setSearchKey',
        payload:searchKey
    }
}

const initialKey = '';
export const searchKeyReducer = (state = initialKey, action) =>{
    switch(action.type){
        case 'searchKey/setSearchKey':
            return action.payload ? action.payload : initialKey;
        default:
            return state;
    }
}

export const selectSearchKey = (state => state.searchKey);