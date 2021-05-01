export const setForecast = (forecast) =>{
    return{
        type:'forecast/setForecast',
        payload:forecast
    }
}

const initialForecast = null;
export const forecastReducer = (state = initialForecast, action) =>{
    switch(action.type){
        case 'forecast/setForecast':
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}

export const selectForecast = (state => state.forecast);