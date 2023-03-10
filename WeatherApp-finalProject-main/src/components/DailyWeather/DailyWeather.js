import React from 'react';
import "./DailyWeather.css"
import { useSelector } from 'react-redux';

function DailyWeather() {

    const data = useSelector(state=>state.search)


    const month = ["", "Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
    return (
    <div className='DailyWeather'>

        <h2 className='dailyHeader'>Həftəiçi hava pronozu</h2>
        <div className='CommonContainer'>
        <div className='dailycontainer'>
        {
            data.daily.data ? data.daily.data.list.map((item) =>

                <div className='dailyForecast' key={item.dt}>
                    <p className='hour'>{String(item.dt_txt).split(" ")[1].slice(0,5)}</p>                       
                    <p className='dateDay'>{parseInt(String(item.dt_txt).split(" ")[0].split("-")[2])} {month[parseInt(String(item.dt_txt).split(" ")[0].split("-")[1])]}</p>
                    <p className='dailyUnit'>{parseInt(item.main.temp)} °C</p>
                    <img src= {`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt = "dailyIcon" className='DailyIcon'/>                        
                </div>

        
            )
            : null
        }
        </div>


        </div>

        
        
    </div>
    );
}

export default DailyWeather;