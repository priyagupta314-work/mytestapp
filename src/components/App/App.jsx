import React from "react";
import Header from "./../Header/Header";
import SearchBox from "./../SearchBox/SearchBox";
import ResultContainer from "./../ResultContainer/ResultContainer";
import {useState} from "react";
import "./App.css";

function App(){
    const result = require("@rstacruz/startup-name-generator");
  
    const [expandedHeaderClass, setExpandedHeaderClass] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);
    return (
        <div>
            <Header headClass = { expandedHeaderClass } />
            <SearchBox onInputChange={(input) => {
                if(input.length){ 
                
                setExpandedHeaderClass(false);
                setSuggestedNames(result(input));
                }
                else
                {           
                    setExpandedHeaderClass(true)
                    setSuggestedNames([]);
                }
             }}
                  />
            <ResultContainer resultData = {suggestedNames} />
        </div>
    )
}

export default App