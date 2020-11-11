import React from 'react';
import ReactDOM from 'react-dom';


function User(props){
    return(
        <div>
            <h2>{props.username}</h2>
        </div>
    )
}

export default User