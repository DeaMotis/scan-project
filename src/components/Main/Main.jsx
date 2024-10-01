import React from 'react';
import './Main.css';
import About from "./Card/Block_About/Block_About";
import WhyUs from "./Card/WhyUs/WhyUs";
import Tariffs from "./Card/Tariffs/Tariffs";

const Main = ({ isLoggedIn, userTariff }) => {
  return (
    <div className="main-content">
        <About isLoggedIn={isLoggedIn} />
        <WhyUs />
        <Tariffs isLoggedIn={isLoggedIn} userTariff={userTariff} />
    </div>
  )
}

export default Main