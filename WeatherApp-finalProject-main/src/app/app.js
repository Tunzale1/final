import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/Navbar';
import Mainpage from '../pages/mainPage/mainPage';
import "./app.css";
import Appp from '../slider/Appp';
function App() {
    return ( 
        
        <BrowserRouter>

            <div className='adsAndRouteCont'>

                <div className='containerMain'>

                    <div className='headerNavbar'>
                        <Navbar />
                    </div>

                    <Routes>
                        <Route path ="/" element = {<Mainpage />}></Route>
                    </Routes>
                    <Routes>
                        <Route path ="/slide" element = {<Appp/>}></Route>
                    </Routes>


                    <div className='FooterContainer'>
                        <Footer />
                    </div>

                </div>

            </div>

        </BrowserRouter>
     );
}

export default App;

