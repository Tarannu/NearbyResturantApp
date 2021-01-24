import React from 'react';
import Login from '../../components/Login/Login';
import './Home.css';

const Home = (props) => {
    return(
        <div className="Home">
            <p className="WelcomeMessage">Welcome to your FoodApp !</p>

            <div className="LoginRegister">
                <div>
                    <Login {...props}/>
                </div>
            </div>
        </div>

    )
}

export default Home;

