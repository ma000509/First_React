import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GateWay from "./pages/GateWay";

import Home from "./pages/Home";

import File from "./pages/File";

export interface IApplicationProps{}

let Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ='/' element= {<Home />}/>
            <Route path ='gateway' element= {<GateWay />}/>
            <Route path ='devices' element= {<File />}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Application;