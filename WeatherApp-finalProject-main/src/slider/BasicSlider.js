import React from 'react'
import "./Slider.css" 
import HeroSlider, {Slide} from 'hero-slider'
const a = "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220624141204-01-weather-forecasting-future.jpg";
const b = "https://i.pinimg.com/originals/9e/0b/e9/9e0be9abf2f2dfe0399f85cdc32681d2.jpg";
const c= "https://wallpapers.com/images/hd/snow-aesthetic-view-0jzec7g3pnpa964t.jpg";
const d ="https://wallpaperaccess.com/full/3265126.jpg";
const e ="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8&w=1000&q=80"
function BasicSlider() {
  return (
    <div className='all'>
    <div className='slide'>
    <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={3}
        onBeforeChange={(previousSlide, nextSlide)=> console.log("onBeforeChange", previousSlide, nextSlide)}
        onChange={nextSlide=> console.log("onChange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
            backgroundColor:"white",
          
        
        }}
        settings={{
           slidingDuration: 250,
           slidingDelay: 100,
           shouldAutoplay: true,
           shouldDisplayButtons: true,
           autoplayDuration: 5000,
           height: "100vh"
        }}>

<Slide
background={{
backgroundImageSrc: a,
backgroundAttachment: "fixed"
}}
/>

<Slide
background={{
backgroundImageSrc: e,
backgroundAttachment: "fixed"
}}
/>

<Slide

background={{
backgroundImageSrc: b,
backgroundAttachment: "fixed"
}}

/>


<Slide
background={{
backgroundImageSrc: c,
backgroundAttachment: "fixed"
}}
/>

<Slide
background={{
backgroundImageSrc: d,
backgroundAttachment: "fixed"
}}

/> 


    </HeroSlider>
    </div>
    <div className='right'>

<h1><i>"Havanın necə olmasından asılı olmayaraq həmişə şən və pozitiv olun."</i></h1>
<br></br>
<img
        src="https://images.unsplash.com/photo-1626548307930-deac221f87d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
        alt="zurafe"
        height="200"
      />
    </div>
    </div>
  )
}

export default BasicSlider

