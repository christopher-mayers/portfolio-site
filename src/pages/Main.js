import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Game from "./TicTacToe";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1 class="main-name">Chris Mayers</h1>
                    <ul className="header">
                        <li>
                            <NavLink activeClassName="active" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/about-me">
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/game">
                                Game
                            </NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route path="/about-me" element={<AboutMe />}/>
                            <Route path="/contact" element={<Contact />}/>
                            <Route path="/game" element={<Game />}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Main;