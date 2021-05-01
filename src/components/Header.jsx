import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveView, selectActiveView } from '../redux/slices/activeViewSlice';
import { selectMenuToggle, setMenuToggle } from '../redux/slices/menuSlice';
import { setTemperatureToggle, selectTemperature } from '../redux/slices/temperatureSlice';
import { setSearchKey } from '../redux/slices/searchKeySlice';

const Header = ({}) =>{
    const dispatch = useDispatch();
    const activeView = useSelector(selectActiveView);
    const temperatureToggle = useSelector(selectTemperature);
    const menuToggle = useSelector(selectMenuToggle);

    const handleClick = (view) =>{
        dispatch(setSearchKey(''))
        dispatch(setActiveView(view));
        handleMenuToggle(false);
    }
    const handleTemperatureToggle = (bool) =>{
        dispatch(setTemperatureToggle(bool));
    }
    const handleMenuToggle = (bool) =>{
        dispatch(setMenuToggle(bool));
    }

    return(
        <div id="header">
            <div className="title">Eitan's weather app</div>
            <div className="switch-env">
                <span>&#8457;</span>
                <label className="switch" htmlFor="temprature-selector">
                    <input type="checkbox" 
                        name="temprature-selector" 
                        id="temprature-selector"
                        checked={temperatureToggle}
                        onChange={e => handleTemperatureToggle(e.target.checked)}        
                        ></input>
                    <span className="slider"></span>
                </label>
                <span>&#8451;</span>
            </div>
            <div className="navigation">
                <div id="menu">
                    <input id="burger" type="checkbox"
                        checked={menuToggle}
                        onChange={e => handleMenuToggle(e.target.checked)} 
                    />
                    <label htmlFor="burger">
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>

                    <nav>    
                    <div className="text-env" style={{top: menuToggle ? '35%' : '100%'}}>
                        <div onClick={() =>{handleClick('Favorites')}}>Favorites</div>
                        <div onClick={() =>{handleClick('Main')}}>Main</div>
                    </div>  
                    </nav>
                </div>
                <div className="desktop">
                    <div 
                        onClick={() =>{handleClick('Main')}}
                        className={`button ${activeView === 'Main' ? 'active' : ''}`}
                    >Main</div>
                                        <div 
                        onClick={() =>{handleClick('Favorites')}}
                        className={`button ${activeView === 'Favorites' ? 'active' : ''}`}
                    >Favorites</div>
                </div>
            </div>
        </div>
    )
}

export default Header;