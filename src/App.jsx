import React , {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import Favorites from './components/Favorites';
import { setActiveView, selectActiveView } from './redux/slices/activeViewSlice';
import { setFavorites, selectFavorites } from './redux/slices/favoritesSlice';
import { selectTemperature } from './redux/slices/temperatureSlice';
import { setFavoritesData, selectFavoritesData } from './redux/slices/favoritesDataSlice';
import { setTheme, selectTheme } from './redux/slices/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faSun } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const App = ({}) =>{    
    const dispatch = useDispatch();
    const activeView = useSelector(selectActiveView);
    const favorites = useSelector(selectFavorites);
    const temperatureToggle = useSelector(selectTemperature);
    const favoritesData = useSelector(selectFavoritesData);
    const theme = useSelector(selectTheme);

    const onFirstRender = () =>{
        dispatch(setActiveView());
        dispatch(setFavorites(JSON.parse(localStorage.getItem('favorites'))));
        dispatch(setTheme(JSON.parse(localStorage.getItem('theme'))));
    }

    useEffect(() =>{
        onFirstRender()
    }, []);

    const removeFavorite = (key) =>{
        const cityId = key.split(':')[0];
        const newFavoritesData = favoritesData.filter(favorite =>{
            return favorite.key !== cityId;
        });   
        const newFavorites = favorites.filter(favorite =>{
            return favorite !== key;
        });
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        dispatch(setFavorites(JSON.parse(localStorage.getItem('favorites'))));
        dispatch(setFavoritesData(newFavoritesData));
    }

    const getCurrentTemperature = (data) =>{
        if(!data){return}
        if(temperatureToggle){
            return (
                <div className="temperature-text">
                    <span>{data.Temperature.Metric.Value}</span>
                    <DegreesIcon str={data.Temperature.Metric.Unit}/>
                </div>
            )
        }
        return (
            <div className="temperature-text">
                <span>{data.Temperature.Imperial.Value}</span>
                <DegreesIcon str={data.Temperature.Imperial.Unit}/>
            </div>
        )
    }
    const getWeatherImage = (icon) =>{
        if(icon){
            const str = (icon < 10) ? '0' + icon.toString() : icon.toString()
            return `url(https://developer.accuweather.com/sites/default/files/${str}-s.png)`
        }
    }

    const DegreesIcon = ({str}) =>{
        str = str.toLowerCase();
        switch(str){
            case 'c':
                return <span>&#8451;</span>;
            case 'f':
                return <span>&#8457;</span>;
            default:
                return '';
        }
    }

    const changeTheme = () =>{ 
        let tempTheme = 'Dark';     
        switch(theme){
            case 'Dark':
                tempTheme = 'Light';
                break;
            case 'Light':                
                break;
            default:
                break;
        }
        dispatch(setTheme(tempTheme));
        localStorage.setItem('theme', JSON.stringify(tempTheme));
    }

    return(
        <div id="app-content" className={theme === 'Light' ? 'light-theme' : 'dark-theme'}>
            <div className="change-theme" onClick={()=>changeTheme()}>
                <FontAwesomeIcon icon={faSun}/>
                <FontAwesomeIcon icon={faMoon}/>
            </div>
            <NotificationContainer/>
            <Header/>
            <div className="content">            
                <div className={`view ${activeView === 'Main' ? 'active' : 'hidden'}`}>
                    <Main removeFavorite={removeFavorite}
                        getCurrentTemperature={getCurrentTemperature}
                        getWeatherImage={getWeatherImage}
                        DegreesIcon={DegreesIcon}
                        defaultSearchKey={'Tel Aviv'}
                    />                                        
                </div>
                <div className={`view ${activeView === 'Favorites' ? 'active' : 'hidden'}`}>
                    <Favorites removeFavorite={removeFavorite}
                        getCurrentTemperature={getCurrentTemperature}
                        getWeatherImage={getWeatherImage}
                        DegreesIcon={DegreesIcon}
                    />   
                </div>         
            </div>
        </div>
    )
}

export default App;