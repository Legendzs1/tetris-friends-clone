import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";


function LogIn(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        //ReactDOM.unmountComponentAtNode(document.getElementById("Game"))
    })
    
    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(event)
        fetch('http://localhost:3000/users/log-in', {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            //Convert React state to JSON to send it as POST body
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res => console.log(res))
        
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" onChange={handleUsernameChange}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" onChange={handlePasswordChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default LogIn