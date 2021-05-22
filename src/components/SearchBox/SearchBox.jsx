import React from "react";
import "./SearchBox.css";
const SearchBox = ({onInputChange , onInputDelete}) => {
    return (
        <div className="search-container">
            <input placeholder="Type some keywords" className="search-input" 
            onChange={(event)=> onInputChange(event.target.value) }/>
        </div>
    )
}

export default SearchBox;