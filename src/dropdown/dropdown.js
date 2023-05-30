import React from 'react';
import List from '../list/list';
import "./dropdown.css"

function Dropdown(props){
    const {clicked, handleClick } = props;
    return (
        
            <div className = "dropdown">
            <div className="select" onMouseEnter={handleClick}>
                <p>Select</p>
            </div>
            {clicked ? <List handleClick={handleClick}/> : ""}
         </div>
        
    );
}

export default Dropdown;