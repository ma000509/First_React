import React from 'react'
import { useNavigate } from 'react-router-dom';

export interface IGateWayProps{};

const GateWay: React.FunctionComponent<IGateWayProps>  = (props) => {
    const navigate = useNavigate();
   
    return(
        <div> 
            <p>
                This is gateway
            </p>
            <button onClick={()=> navigate('/')}>Volver</button>
        </div>
    );
};

    export default GateWay;