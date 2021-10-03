import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Sitebar from "./components/home/Navbar";
import RatingDisplay from "./components/Rating/RatingDisplay";
import Auth from "./components/Auth/Auth";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import RatingCreate from "./components/Rating/RatingCreate";
import RatingIndex from "./components/Rating/RatingIndex";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './assets/SophieFerrari812.jpg'
import image2 from './assets/BillPorsche2.jpg'
import image3 from './assets/JessicaCamero.PNG'
import image4 from './assets/Kaliblueborghini.jpg'
import image5 from './assets/Summerborghini.jpg'
import image6 from './assets/Jeromeborghini-13.jpg'
import image7 from './assets/Adamlamborghini.jpg'
import image8 from './assets/phoenixBMWpurple-17.jpg'
import image9 from './assets/RichardFerrari.jpg'
import image10 from './assets/SophieJaegerAmland.jpg'
import image11 from './assets/EvanRoadster21.jpg'
import image12 from './assets/Trentlamborghini.jpg'
import image13 from './assets/Rhiannaferrari812-18.jpg'
import image14 from './assets/Alyssacorvett.PNG'
import image15 from './assets/NaftimercediAMG.jpeg'
import image16 from './assets/JonathanMcLarenP1.jpg'
import image17 from './assets/Jessicacorvette.png'
import image18 from './assets/Hunterbrego.jpg'
import image19 from './assets/CameronBMer-17.jpg'
import image20 from './assets/BrennandiAMGTR.jpg'
import image21 from './assets/Chrisporsche279racer.jpg'
import image22 from './assets/Sophferrari458.jpg'

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    console.log(sessionToken)
  }, [sessionToken])

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken); 
  };

  //Clearing our token on logout
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <>
        <RatingCreate token={sessionToken}/>
        <Sitebar clickLogout={clearToken} token={sessionToken} />
      </>
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <Sitebar clickLogout={clearToken} token={sessionToken}/>
      {protectedViews()}
      <switch></switch>
      <Footer />
      <AliceCarousel autoPlay autoPlayInterval="2000">
     <img src={image1} id="Sophie" className="sliderimg"/>
     <img src={image2} className="sliderimg"/>
     <img src={image3} className="sliderimg"/>
     <img src={image4} className="sliderimg"/>
     <img src={image5} className="sliderimg"/>
     <img src={image6} className="sliderimg"/>
     <img src={image7} className="sliderimg"/>
     <img src={image8} className="sliderimg"/>
     <img src={image9} className="sliderimg"/>
     <img src={image10} className="sliderimg"/>
     <img src={image11} className="sliderimg"/>
     <img src={image12} className="sliderimg"/>
     <img src={image13} className="sliderimg"/>
     <img src={image14} className="sliderimg"/>
     <img src={image15} className="sliderimg"/>
     <img src={image16} className="sliderimg"/>
     <img src={image17} className="sliderimg"/>
     <img src={image18} className="sliderimg"/>
     <img src={image19} className="sliderimg"/>
     <img src={image20} className="sliderimg"/>
     <img src={image21} className="sliderimg"/>
     <img src={image22} className="sliderimg"/>
   </AliceCarousel>
   
   </div>
  )
}


export default App;