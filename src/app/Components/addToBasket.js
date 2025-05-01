import React, { useState } from 'react';
import './addToBasket.css';


const AddToBasket = (props) => {
    const { item } = props;


    return (
        <div className='your_cart'>
            <p className='cart_title'>Your Cart(0)</p>
            <img style={{ width: "50%" }} className='empty_cart_image' src="/images/illustration-empty-cart.svg" alt="Empty Cart"></img>
            <p className='empty_cart_message'>Your added items appear here</p>
        </div >

    );
};

export default AddToBasket;
