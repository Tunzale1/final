import "./footer.css"
function Footer() {
    return ( 
        <div className="footerDiv">
            <div className="footerCont">
                 
                <div className="contactUsContainer">
                    <h3 className="contactUs">Əlaqə saxlayın</h3>
                    <a href="mailto: tunzaleimanova03@mail.ru" className="email">tunzaleimanova03@mail.ru</a>
                    <a href="tel: +994-055-55-55" className="email">+994-055-555-55-55</a>
                </div>
                <div className="copyright">© 2022 SunWeather. Bütün hüquqlar qorunur.</div>
            </div>
        </div> 
    );
}

export default Footer;