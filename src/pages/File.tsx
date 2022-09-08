import React from "react";
import { useNavigate } from "react-router-dom";

export interface IFilesProps{};
const File: React.FunctionComponent<IFilesProps> = (props) => {
     const navigate = useNavigate();
   
    return(
        <div>
            <p>
                This is file
            </p>
            <button onClick={()=> navigate('/devices')}>Volver</button>
        </div>
    );
};
export default File;