import React from "react";
import { Link } from 'react-router-dom';
import Devices from './Devices';



export interface IHomeProps{};

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return(
        <div>
            <p className="Title">This is home</p>
            <ul>
                <li>
                <Link to="/gateway">GateWay</Link>
                </li> 
                <li>
                <Link to="/devices">Devices</Link>
                </li>    
            </ul>            
            
                  
        </div>
    );
}; 
export default Home;