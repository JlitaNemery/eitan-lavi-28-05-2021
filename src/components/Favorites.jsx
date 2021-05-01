import React , {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../api/api';
import { selectFavorites } from '../redux/slices/favoritesSlice';
import { setFavoritesData, selectFavoritesData } from '../redux/slices/favoritesDataSlice';
import { setActiveView } from '../redux/slices/activeViewSlice';
import { setSearchKey } from '../redux/slices/searchKeySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NotificationManager } from 'react-notifications';

const Favorites = ({removeFavorite, getCurrentTemperature, getWeatherImage}) =>{

    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const favoritesData = useSelector(selectFavoritesData);

    const getFavoritesForecast = () =>{
        const getForcastAll = favorites.map(str =>{
            let key = str.split(':')[0];
            return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${api.key}`);
        });
        Promise.all(getForcastAll).then((values) => {
            return Promise.all(
                values.map((res) => {
                    return res.json();
                })
            ).then(data =>{                
                const fixedData = data.map((arr, i) =>{
                    let [key, name] = favorites[i].split(':');
                    return {...arr[0], key, name};
                })
                dispatch(setFavoritesData(fixedData));
            }).catch(error => {NotificationManager.error("Can't get weather, If I knew I'd tell you", 'Whoops...', 3000);});       
        }).catch(error => NotificationManager.error("Can't get weather, If I knew I'd tell you", 'Whoops...', 3000));
    }

    useEffect(() =>{
        getFavoritesForecast();
    }, [favorites])    

    const goToMain = (cityName) =>{
        dispatch(setSearchKey(cityName));
        dispatch(setActiveView('Main'));
    }

    const Content = () =>{
        return(
            <div className="boxes">
                {
                favoritesData.map(favorite => (
                    <div className="box" key={favorite.key}
                        style={{backgroundImage:getWeatherImage(favorite.WeatherIcon)}}
                    >
                        <div className="dark" onClick={() =>{goToMain(favorite.name)}}></div>
                        <div className="icon" onClick={() =>{removeFavorite(favorite.key + ':' + favorite.name)}}>                        
                            <FontAwesomeIcon icon={faHeart}/>                    
                        </div>
                        <div className="city-name">{favorite.name}</div>
                        <div className="text">{favorite.WeatherText}</div>
                        <div className="temperature">{getCurrentTemperature(favorite)}</div>
                        <div className="city-id">
                            <span>id: </span>
                            <span>{favorite.key}</span>
                        </div>
                    </div>
                ))
                }
            </div>
        )
    }

    const NoData = () =>{
        return(
            <div style={{margin:'auto'}}>
                <span>You have no favorites yet... except you :)</span>
            </div>
        )
    }

    return(
        <div id="favorites">            
            <div className="content-env">
            <div className="top-row"></div>
                {
                    favoritesData.length > 0 ? <Content/> : <NoData/>
                }                    
            </div>
        </div>        
    )
}

export default Favorites;