import React, { Component } from "react";
import headshot from "../assets/headshot.jpg";

class Home extends Component {
    render() {
        return (
            <div class="home-body">
                <h2 class="home-greeting">HELLO!</h2>
                <p class="home-body">Welcome to my page.</p>

                <p class="home-body">My name is Chris Mayers.</p>
                <img class="headshot-image" src={headshot}/>
            </div>
        );
    }
}

export default Home;