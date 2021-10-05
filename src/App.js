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

import image1 from './assets/collagepic-2.jpg'
import image2 from './assets/collagepic.jpg'
import image3 from './assets/EvanRoadster22.jpg'
import image4 from './assets/EvanRoadsterPricing-1.jpg'
import image5 from './assets/Rhiannaferrari812-18.jpg'
import image6 from './assets/Rhiannaferrari812-Pricing-2.jpg'
import image7 from './assets/Jeromeborghini-13.jpg'
import image8 from './assets/Jeromeborghini-Pricing-3.jpg'
import image9 from './assets/NaftimercediAMG.jpeg'
import image10 from './assets/NaftimercediAMGTR-Pricing-4.jpg'
import image11 from './assets/BrennandiAMGSLS.jpg'
import image12 from './assets/BrennandiAMGSLS-Pricing-5.jpg'
import image13 from './assets/CameronaventadorTeal.jpg'
import image14 from './assets/Cameronaventador-pricing-6.jpg'
import image15 from './assets/SophieFerrari812.jpg'
import image16 from './assets/Hunterbrego.jpg'
import image17 from './assets/Hunterbrego-Pricing-7.jpg'
import image18 from './assets/KaliJaguar.jpg'
import image19 from './assets/KaliJaguar-Pricing-8.jpg'
import image20 from './assets/Adamlamborghini.jpg'
import image21 from './assets/Adamlamborghini-Pricing-9.jpg'
import image22 from './assets/RichardRolls-RoyceGhost-Rich.jpg'
import image23 from './assets/RichardRolls-Royce-10.jpg'
import image24 from './assets/RickyBugatti-RC.jpg'
import image25 from './assets/RickyBugatti-Pricing-11.jpg'
import image26 from './assets/Trentlamborghini.jpg'
import image27 from './assets/Trentlamborghini-pricing-12.jpg'
import image28 from './assets/JonathanMcLaren2018.jpg'
import image29 from './assets/JonathanMcLarenPricing-13.jpg'
import image30 from './assets/Chrisporsche911-chris.jpg'
import image31 from './assets/Chrisporsche911Pricing-14.jpg'
import image32 from './assets/SophieSF90.jpg'
import image33 from './assets/SummerGT-Pricing-15.jpg'
import image34 from './assets/Jessicacorvette.jpg'
import image35 from './assets/Jessicacorvette-Pricing.PNG'
import image36 from './assets/phoenixBMWpurple-17.jpg'
import image37 from './assets/phoenixBMW-Black-16.jpg'
import image38 from './assets/collagepic-4.jpg'
import image39 from './assets/collagepic-3.jpg'

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
     <img src={image23} className="sliderimg"/>
     <img src={image24} className="sliderimg"/>
     <img src={image25} className="sliderimg"/>
     <img src={image26} className="sliderimg"/>
     <img src={image27} className="sliderimg"/>
     <img src={image28} className="sliderimg"/>
     <img src={image29} className="sliderimg"/>
     <img src={image30} className="sliderimg"/>
     <img src={image31} className="sliderimg"/>
     <img src={image32} className="sliderimg"/>
     <img src={image33} className="sliderimg"/>
     <img src={image34} className="sliderimg"/>
     <img src={image35} className="sliderimg"/>
     <img src={image36} className="sliderimg"/>
     <img src={image37} className="sliderimg"/>
     <img src={image38} className="sliderimg"/>
     <img src={image39} className="sliderimg"/>
   </AliceCarousel>
   
   </div>
  )
}


export default App;