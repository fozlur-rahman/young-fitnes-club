import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Cart.css';
import user from '../../images/271617923_443961623926763_3670655282439181725_n (2)-PhotoRoom.png';

const Cart = ({ cart }) => {

    const [times, setTime] = useState([]);
    console.log(cart);
    let totalTimes = 0;
    let breakTime = 0;
    for (const exercise of cart) {
        totalTimes = totalTimes + exercise.time;
    }

    const addBreakTime = (getTime) => {
        let newTime = [...times, getTime];
        setTime(newTime);
    }

    for (const time of times) {
        breakTime = time;
    }

    const handleComplete = () => toast("Yeah! Activity Completed");
    return (
        <div className='cart-container'>
            <div className='user'>
                <img className='user-img' src={user} alt="" />
                <h3>Fozlur Rahman</h3>
            </div>
            <div className='user-deatils'>
                <div>
                    <h3>60 </h3>
                    <span>Weight</span>
                </div>
                <div>
                    <h3>5.7</h3>
                    <span>Height</span>
                </div>
                <div>
                    <h3>22</h3>
                    <span>Age</span>
                </div>
            </div>

            <div className='add-brack'>
                <h3 >Add A Break</h3>
                <div className='add-brack-btns'>
                    <button onClick={() => addBreakTime(5)} >5m</button>
                    <button onClick={() => addBreakTime(10)} >10m</button>
                    <button onClick={() => addBreakTime(15)}>15m</button>
                    <button onClick={() => addBreakTime(20)}>20m</button>
                    <button onClick={() => addBreakTime(30)}>30m</button>
                </div>
            </div>

            <div className='exercise-details'>
                <h3>Exercise Details</h3>
                <div className='exercise-times'>
                    <p>Exercise Times: {totalTimes} m</p>
                </div>
                <div className='break-times'>
                    <p>Break Times : {breakTime} m</p>
                </div>

                <button onClick={handleComplete} className='activity-btn'>Activity Complete</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Cart;