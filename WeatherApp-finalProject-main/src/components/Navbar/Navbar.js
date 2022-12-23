import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
    return ( 
        <div className='Navbarcont'>

<i className="fa-solid fa-cloud"></i>
<i className="fa-regular fa-snowflake"></i>
<i className="fa-solid fa-cloud-rain"></i>
<i className="fa-solid fa-sun"></i>
<i className="fa-solid fa-bolt"></i>

                <div className='LinkContainer'>
                    <Link to = "/" className='Link'>Hava proqnozu</Link>
                </div>
                
                <div className='slides'>

                    <Link to = "/slide">Home</Link>
                </div>


            </div>

     
     );
}

export default Navbar;