import React from 'react';
import "./list.css" 

function List(props){
    const { handleClick } = props;
    return (
            <div className="list" onClick={handleClick}>
                <p>Yes</p>
                <p>Probably Not</p>
            </div>
    );
}

export default List;