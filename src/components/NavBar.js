import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles/NavBar.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './LogIn.js'
import SignUp from './SignUp.js'
import Home from './Home.js'

function NavBar(){
    return(
        <Router>
            <div>
                <nav>
                    <ul style={css}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={LogIn} />
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
            </div>
        </Router>
    )
}

export default NavBar