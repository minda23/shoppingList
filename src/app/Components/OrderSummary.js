
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
            <div>
                <p className='product_name'>here gonna be name of product</p>

                <p className='product_quantity'>1x @8.00 $8.00 <img className='image' src='/images/icon-remove-item.svg'></img></p>
            </div>
            <div className='order'>
                <p className='order_total_label'>Order Total</p>
                <p className='order_total_value'>$8.00</p>
            </div>

            <p className='carbon_neutral_delivery'>  <img className='image_carbon' src='/images/icon-carbon-neutral.svg'></img>This is carbon neutral delivery</p>


            <img className='empty_cart_image' src="/images/illustration-empty-cart.svg" alt="Empty Cart"></img>
            <p className='empty_cart_message'>Your added items appear here</p>
            <button onClick={() => dispatch({ type: "OPEN_MODAL" })} className='btn_order'>Confirm Order</button>
        </div>
    );
};

export default OrderSummary;