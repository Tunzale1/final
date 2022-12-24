import React from 'react';
import "./currentWeather.css";
import selsi from "../../images/WeatherIcon - 1-1.png";
import { useSelector } from 'react-redux';



function CurrentWeather() {

    const data = useSelector(state=>state.search)

    return ( 
        
            

            <div className='currentWeatherCont'>
            <div className='iconAndUnitChangeCont'>
                {data.data.data ? <img src = {`http://openweathermap.org/img/wn/${data.data.data.weather[0].icon}@2x.png`} alt = "weathericon" draggable="false" className='weathericon' /> : null}
            </div>

            <div className='degreeAndValues'>
                <div className='value'>{data.data.data ? parseInt(data.data.data.main.temp) : null}</div>
                <img src={selsi} alt = "units" className='units' draggable="false"/>
            </div>

            <div className='DatesAndWeeks'>
                <p className='date'>{data.data.data ? Date(1000 * Number(data.data.data.dt)).split(" ")[2] : null} {data.data.data ? Date(1000 * Number(data.data.data.dt)).split(" ")[1] : null} ‘{data.data.data ? Date(1000 * Number(data.data.data.dt)).split(" ")[3] : null}</p>
                <p className='weekHour'>{data.data.data ? Date(1000 * Number(data.data.data.dt)).split(" ")[0] : null}  |  {data.data.data ? Date(1000 * Number(data.data.data.dt)).split(" ")[4] : null}</p> 
            </div>

            <div className='WindHumRainContainer'>
                <div className='windspd'>
                <i className="fa-solid fa-wind"></i>
                    <p className='speedpar'> Külək {data.data.data ? (data.data.data.wind.speed) : null} km/h</p>
                </div>

                

                <div className='humanity'>
                <i className="fa-solid fa-droplet"></i>
                    <p className='humanityDrg'>Rütübət {data.data.data ? (data.data.data.main.humidity) : null} %</p>
                </div>

            </div>
            
        </div>
        
       
    );
}

export default CurrentWeather;
