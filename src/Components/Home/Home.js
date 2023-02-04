import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Recruit, retain and <br /> remember your people</h1>
                <h4>Simplify your talent journey and make confident, people-focused decisions with Xref.</h4>
                <div className="start">
                    <button>Get started for free</button>
                    <p>Request a demo</p>
                </div>
            </div>
        );
    }
}

export default Home;
