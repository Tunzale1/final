import "./locationAndSun.css"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import SendLocation from "../../state/actions/weatherApiActions";


function LocationAndSun() {
    
    const dispatch1 = useDispatch()

    const [DisplayClass, SetClass] = useState({
        class: "none",
        value: "",
    })



    const handleChange=(e)=>{
        SetClass({value: e.target.value })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch1(SendLocation(DisplayClass.value))
        
    }

    const loccc = useSelector(state=>state.search)

    return ( 
    <div className="locAndSunCont">
        <div className="locContainer">

            <div className="mapAndCountryContainer">
            <i className="fa-regular fa-compass fa-2x" ></i>  
                <div className="locationName">{loccc.data.data ? loccc.data.data.name : null }</div>
            </div>

            <div className= "inputContainer">
                <form className="SearchForm" action="/" onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Yer axtarın" onChange={handleChange} value = {DisplayClass.value}/>    
                </form>
            </div>
            

        </div>

        <div className="Error">
            {loccc.error.length> 0 ? loccc.error : null}
        </div>
        <figure className="flag">
        <img
          src={`https://raw.githubusercontent.com/lipis/flag-icons/a108610f6372e5ba4c8a8f80cab39f88c676a742/flags/4x3/${loccc.data.data?.sys.country.toLowerCase()}.svg`}
          alt={loccc.data.data?.sys.country}
        />
      </figure>
        <div className="sunRiseSunSetContainer">
            <div className="sunriseContainer">
                <p className="SunriseText">Gün çıxımı</p>
                <div className="clock">{loccc.data.data ? String(new Date(1000 * Number(loccc.data.data.sys.sunrise))).split(" ")[4] : null }</div>
            </div>

            <div className="sunsetContainer">
                <p className="sunsetText">Gün batımı</p>
                <div className="clock">{loccc.data.data ? String(new Date(1000 * Number(loccc.data.data.sys.sunset))).split(" ")[4] : null }</div>
            </div>
        </div>
       
    </div> 
    );
}

export default LocationAndSun;