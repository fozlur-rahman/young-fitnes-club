import React from 'react';
import './Exercise.css'

const Exercises = ({ exercise, handleAddToCart }) => {
    // console.log(exercise);
    const { name, img, time } = exercise;
    return (

        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Time: {time} minutes</p>
            <button onClick={() => handleAddToCart(exercise)} className='add-btn' >
                Add To List</button>

        </div>
    );
};

export default Exercises;