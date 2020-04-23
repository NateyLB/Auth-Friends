import React from 'react';
import { Link } from 'react-router-dom'

const Home = props =>{

    return(
        <div>
            <h1>Welcome to Auth Friends</h1>
            <Link to="/login">
                <button>Log In!</button>
            </Link>
        </div>
    )
}

export default Home;