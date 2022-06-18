import React, { useState } from "react";
import "../App.css";
import { BrowserRouter, Route } from "react-router-dom";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../Header/HeaderComponent";

const Dashboard = () => {

  return (

      <BrowserRouter>
        <HeaderComponent/>
        <FooterComponent />
      </BrowserRouter>
  );
};

export default Dashboard;
