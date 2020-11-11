import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import Game from './Game'
import User from './User'

function SignUp(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        //ReactDOM.unmountComponentAtNode(document.getElementById("Game"))
    })
    
    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log(event)
        fetch('http://localhost:3000/users/create', {

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
        .then(res= () => {
            location.replace(`/user/${username}`)
        })

        //TODO FIX THE UNDEFINED
        //HAVE IT ROUTE TO THE USER's PAGE THEN SHOW
        //WELCOME USER (THE USERNAME THEY SIGNED UP WITH)
        //ADD HASING TO PASSWORD
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    return(
        <div>
            <h1>Sign Up</h1>
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

export default SignUp