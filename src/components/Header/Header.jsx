import React from 'react';
import './Header.css';
import undraw_ideas_flow_cy7b from './undraw_ideas_flow_cy7b.svg';

const Header = ({headClass})  =>  {
    return (
        <div className="head-container">
            <img src={undraw_ideas_flow_cy7b} className={`head-image ${headClass ? "head-expanded" : "head-contracted" }`} alt="headerImage" />
            <h1 className={`head-text ${headClass ? "head-text-expanded" : "head-text-contracted" }`}> Let's name your StartUp!</h1>
            
        </div>
    )
}
export default Header;
