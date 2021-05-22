import React from "react";
import "./ResultContainer.css"
const ResultContainer = ({resultData}) =>{
     const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain=";
     return (
    <div>

             <ul className="results">
            {resultData.map( data => < li className= "result-item"> 
                                            <a className="suggested-name" 
                                               target="_blank"
                                               href={`${nameCheapURL}${data}`}> {data} </a>
                                     </li>)}
             </ul>
        
    </div>
)
     }

export default ResultContainer;