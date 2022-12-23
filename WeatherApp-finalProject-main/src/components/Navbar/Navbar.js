import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
    return ( 
        <div className='Navbarcont'>
<div className='logog'>
<a href="https://az.wikipedia.org/wiki/Bulud"><i className="fa-solid fa-cloud"></i></a>
<a href="https://az.wikipedia.org/wiki/Qar"><i className="fa-regular fa-snowflake"></i></a>
<a href="https://az.wikipedia.org/wiki/Yağış"><i className="fa-solid fa-cloud-rain"></i></a>
<a href="https://az.wikipedia.org/wiki/Günəş"><i className="fa-solid fa-sun"></i></a>
<a href="https://az.wikipedia.org/wiki/Şimşək"><i className="fa-solid fa-bolt"></i></a>
</div>
                <div className='LinkContainer'>
                    <Link to = "/" className='Link'>Hava şəraiti</Link>
                </div>
                
                <div className='slides'>

                    <Link to = "/slide" className='slider'>Home</Link>
                </div>


            </div>

     
     );
}

export default Navbar;