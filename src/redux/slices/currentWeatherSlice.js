export const setCurrentWeather = (currentWeather) =>{
    return{
        type:'currentWeather/setWeather',
        payload:currentWeather
    }
}

const initialWeather = null;
export const currentWeatherReducer = (state = initialWeather, action) =>{
    switch(action.type){
        case 'currentWeather/setWeather':
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}

export const selectCurrentWeather = (state => state.currentWeather);