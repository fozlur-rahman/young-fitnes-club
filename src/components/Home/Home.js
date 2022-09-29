import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Home.css';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])

    const handleAddToCart = (selectExercise) => {
        // console.log(selectExercise);
        let newCart = [...cart, selectExercise];
        setCart(newCart);

    }


    return (
        <div className="home-container">
            <div className='exercises-container'>
                <div className='exercises-header'>
                    <h2>Young Fitness Club</h2>
                    <p>Select todays exercise</p>
                </div>
                <div className='exercises'>
                    {
                        exercises.map(exercise => <Exercise
                            exercise={exercise}
                            key={exercise.id}
                            handleAddToCart={handleAddToCart}

                        ></Exercise>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;