import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import File from "../pages/File";
import GateWay from "../pages/GateWay";
import Home from "../pages/Home";
export interface IDevicesProps{};

let Devices: React.FunctionComponent<IDevicesProps> = (props) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="devices" element={<Home />} />
                <Route path= "gateway" element = {<GateWay/>}/>
                <Route path="file" element = {<File/>}/>
            </Routes>
            
        </BrowserRouter>
    );
};
export default Devices;