import React , { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useValidation from '../hooks/useValidation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { api } from '../api/api';
import { setCity, selectCity } from '../redux/slices/citySlice';
import { setSearchKey, selectSearchKey } from '../redux/slices/searchKeySlice';
import { setCurrentWeather, selectCurrentWeather } from '../redux/slices/currentWeatherSlice';
import { setForecast, selectForecast } from '../redux/slices/forecastSlice';
import { selectTemperature } from '../redux/slices/temperatureSlice';
import { selectActiveView } from '../redux/slices/activeViewSlice';
import { setFavorites, selectFavorites } from '../redux/slices/favoritesSlice';
import { setSearchResults, selectSearchResults } from '../redux/slices/serchResultsSlice';
import { NotificationManager } from 'react-notifications';
import Autocomplete from 'react-autocomplete';

const Main = ({removeFavorite, getCurrentTemperature, getWeatherImage, DegreesIcon, defaultSearchKey}) =>{
    const dispatch = useDispatch();
    const city = useSelector(selectCity);
    const searchKey = useSelector(selectSearchKey);
    const currentWeather = useSelector(selectCurrentWeather);
    const forecast = useSelector(selectForecast);
    const temperatureToggle = useSelector(selectTemperature);
    const favorites = useSelector(selectFavorites);
    const activeView = useSelector(selectActiveView);
    const [isKeyValid, setIsKeyValid, invalidKeyError] = useValidation(searchKey, /^[a-zA-Z\s]+$/, 'Ileagal characters'); 
    const searchResults = useSelector(selectSearchResults);

    useEffect(() =>{
        getCity(defaultSearchKey, true);
    }, [defaultSearchKey]);

    useEffect(() =>{
        if(searchKey !== undefined && searchKey !== '' && activeView === 'Main'){
            getCity(searchKey, true);
        }
    }, [activeView]);

    useEffect(() => {
        if(city.Key){
            getForecast(city.Key);
        }
    }, [temperatureToggle])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!isKeyValid){
            return;
        }
        let cityKey = 'no-key';
        for(let i = 0; i < searchResults.length; i++){
            if(searchResults[i].LocalizedName === e.target[0].value){
                cityKey = searchResults[i].Key;
                break;
            }
        }
        if(cityKey === 'no-key'){
            NotificationManager.error('No imaginary cities pls...', 'Whoops...', 3000);
            return
        }
        dispatch(setCity(searchResults[0]));
        getCurrentConditions(cityKey);
        getForecast(cityKey);
    }
    const getCurrentConditions = async(location) => {
        const url = `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${api.key}`;
        fetch(url)
            .then((response) => response.json())
            .then(data => {  
                dispatch(setCurrentWeather(data[0]));
                console.log(currentWeather);
            }).catch((error) =>{
                NotificationManager.error("Can't get weather, If I knew I'd tell you", 'Whoops...', 3000);
            })

    }
    const getForecast = async(location) => {
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${api.key}&metric=${temperatureToggle}`;
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                dispatch(setForecast(data.DailyForecasts));
            }).catch((error) =>{
                NotificationManager.error("Can't get weather, If I knew I'd tell you", 'Whoops...', 3000);
            })
    }
    const getCity = async (val, getAllData) => {
        const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${api.key}&q=${val}`;      
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                dispatch(setSearchResults(data));
                if(getAllData){
                    dispatch(setCity(data[0]));
                    getCurrentConditions(data[0].Key);
                    getForecast(data[0].Key);
                }
            }).catch((error) =>{
                NotificationManager.error('No city found, Are you lost?', 'Whoops...', 3000);
            })
    }

    const handleInputChange = (value) => {
        const hasLetters = /[a-zA-Z]/g;
        dispatch(setSearchKey(value));        
        setIsKeyValid(value);
        if(isKeyValid && hasLetters.test(value)){
            getCity(value)
        }
    }

    const addFavorite = (key) =>{
        if(favorites.length > 0){
            const newFavorites = [...favorites, key]
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }else{
            localStorage.setItem('favorites', JSON.stringify([key]));
        }
        dispatch(setFavorites(JSON.parse(localStorage.getItem('favorites'))));
    }

    const addRemoveFavorites = (key) =>{
        if(favorites.includes(key)){
            removeFavorite(key);
        }else{
            addFavorite(key);
        }
    }

    const formatWeekDay = (dateString) =>{
        const date = new Date(dateString);
        return Intl.DateTimeFormat('en-US', { weekday: 'short'}).format(date);
    }

    const handleSelect = (val) =>{
        dispatch(setSearchKey(val)); 
        setIsKeyValid(val);
        if(!isKeyValid){
            return;
        }
        getCity(val, true);
    } 
    
    const Content = () =>{
        return(
        <div className="content-env">
            <div className="top-row">
                <div className="city">
                    <div className="weather-image"
                        style={{backgroundImage: getWeatherImage(currentWeather?.WeatherIcon)}}
                    ></div>                
                    <div className="text-large">
                        <div className="name">{city.LocalizedName}</div>
                        <div className="conditions">
                            <div className="temperature">{getCurrentTemperature(currentWeather)}</div>
                            <div>{currentWeather.WeatherText}</div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    
                </div>
                <div className="favorites-button" onClick={() => addRemoveFavorites(city.Key + ':' + city.LocalizedName)}>
                    <div className={`icon ${favorites.includes(city.Key + ':' + city.LocalizedName) ? 'remove' : 'add'}`}>                        
                        <FontAwesomeIcon icon={faHeart}/>                    
                    </div>
                </div>
            </div>
            <div className="forecast-env" style={{overflowY:'scroll'}}>
                <div className="forecast">
                    {
                        forecast.map(day => (
                            <div className="box" key={day.EpochDate}
                                style={{backgroundImage: getWeatherImage(day.Day.Icon)}}
                            >                                
                                <div className="day">{formatWeekDay(day.Date)}</div>
                                <div className="text">{day.Day.IconPhrase}</div>
                                <div className="temperature">
                                    <div className="min">
                                        <span>{day.Temperature.Minimum.Value}</span>
                                        <DegreesIcon str={day.Temperature.Minimum.Unit}/>
                                    </div>
                                    <span>-</span>
                                    <div className="max">
                                        <span>{day.Temperature.Maximum.Value}</span>
                                        <DegreesIcon str={day.Temperature.Maximum.Unit}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        )
    }
    return(
        <div id="main">            
            <div className="search-box-env">
                <div className="search-box">
                    <form onSubmit={handleSubmit} spellCheck="false">
                        <Autocomplete                            
                            getItemValue={(item) => item.LocalizedName}
                            items={searchResults}
                            renderItem={(item, isHighlighted) =>
                                <div key={item.Key} 
                                    className={`selection ${isHighlighted ? 'highlight' : 'normal'}`}
                                >
                                    {item.LocalizedName}
                                </div>
                            }
                            value={searchKey}
                            onChange={e => handleInputChange(e.target.value)}
                            onSelect={(val) => handleSelect(val)}
                        />
                        <button type="submit" className={`submit-search ${!isKeyValid ? 'disabled' : ''}`}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                    <div className="error-env">
                        <div className={isKeyValid ? "invalid-search": "invalid-search on"}>{invalidKeyError}</div>                        
                    </div>
                </div>
            </div>
            {
                forecast && currentWeather ? <Content/> : <div className="loader">Loading...</div>
            }
        </div>
    )
}

export default Main;