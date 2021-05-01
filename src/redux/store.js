import { combineReducers, createStore } from 'redux';
import { cityReducer } from './slices/citySlice';
import { searchKeyReducer } from './slices/searchKeySlice';
import { currentWeatherReducer } from './slices/currentWeatherSlice';
import { forecastReducer } from './slices/forecastSlice';
import { activeViewReducer } from './slices/activeViewSlice';
import { temperatureReducer } from './slices/temperatureSlice';
import { favoritesReducer } from './slices/favoritesSlice';
import { favoritesDataReducer } from './slices/favoritesDataSlice';
import { menuToggleReducer } from './slices/menuSlice';
import { searchResultsReducer } from './slices/serchResultsSlice';
import { themeReducer } from './slices/themeSlice';

const reducers = {
    city:cityReducer,
    searchKey:searchKeyReducer,
    currentWeather:currentWeatherReducer,
    forecast:forecastReducer,
    activeView:activeViewReducer,
    temperatureToggle:temperatureReducer,
    favorites:favoritesReducer,
    favoritesData:favoritesDataReducer,
    menuToggle:menuToggleReducer,
    searchResults:searchResultsReducer,
    theme:themeReducer
}

const store = createStore(combineReducers(reducers));


export default store;