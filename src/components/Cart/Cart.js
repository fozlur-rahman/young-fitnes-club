import React from 'react';
import './Cart.css';
import user from '../../images/271617923_443961623926763_3670655282439181725_n (2)-PhotoRoom.png';

const Cart = ({ cart }) => {
    console.log(cart)
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
                <h3>Add A Break</h3>
            </div>

            <div className='exercise-details'>
                <h3>Exercise Details</h3>
                <div className='exercise-times'>
                    <p>Exercise Times <span>100s</span></p>
                </div>
                <div className='break-times'>
                    <p>Break Times <span>100s</span></p>
                </div>

                <button className='activity-btn'>Activity Complete</button>
            </div>
        </div>
    );
};

export default Cart;