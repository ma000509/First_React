import React from "react";
import { useNavigate } from "react-router-dom";

export interface IDevicesProps{};
const Devices: React.FunctionComponent<IDevicesProps> = (props) => {
     const navigate = useNavigate();
   
    return(
        <div>
            <p>
                This is Devices
            </p>
            <button onClick={()=> navigate('/')}>Volver</button>
        </div>
    );
};
export default Devices;