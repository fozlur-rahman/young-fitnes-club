import React from 'react';
import './Exercise.css'

const Exercises = ({ exercise }) => {
    console.log(exercise);
    const { name, img, time } = exercise;
    return (

        <div className='exercise'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Time: {time} s</p>
            <button className='add-btn'>Add To List</button>

        </div>
    );
};

export default Exercises;