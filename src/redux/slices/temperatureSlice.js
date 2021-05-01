export const setTemperatureToggle = (bool) =>{
    return{
        type:'temperature/setTemperatureToggle',
        payload:bool
    }
}

const initialType = true;
export const temperatureReducer = (state = initialType, action) =>{
    switch(action.type){
        case 'temperature/setTemperatureToggle':
            return action.payload;
        default:
            return state;
    }
}

export const selectTemperature = (state => state.temperatureToggle);