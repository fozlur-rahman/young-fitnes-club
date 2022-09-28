import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Events from '../Events/Events';
import './Home.css';

const Home = () => {
    const [evnets, setEvents] = useState([]);

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (
        <div className="home-container">
            <Events></Events>
            <Cart></Cart>
        </div>
    );
};

export default Home;