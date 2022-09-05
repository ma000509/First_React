import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GateWay from "./pages/GateWay";

import Home from "./pages/Home";

import Devices from "./pages/Devices"; "./pages/Devices";

export interface IApplicationProps{}

let Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ='/' element= {<Home />}/>
            <Route path ='gateway' element= {<GateWay />}/>
            <Route path ='devices' element= {<Devices />}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Application;