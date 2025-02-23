
"use client";
import React from 'react';
import './OrderSummary.css';
import DataContext from "./dataContext";
import { useContext } from "react";


const OrderSummary = () => {
    const [state, dispatch] = useContext(DataContext)

    return (
        <div className='your_cart'>
            <p className='cart_title'>Your Cart</p>



            <img className='empty_cart_image' src="/images/illustration-empty-cart.svg" alt="Empty Cart"></img>
            <p className='empty_cart_message'>Your added items appear here</p>

        </div>
    );
};

export default OrderSummary;