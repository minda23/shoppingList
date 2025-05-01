
"use client";
import React from 'react';
import './OrderSummary.css';
import DataContext from "./dataContext";
import { useContext, useState } from "react";
import OpenModal from './openModal';


const OrderSummary = (props) => {
    const { item } = props;
    const [openModal, setOpenModal] = useState(false);
    const [selectedCakeId, setSelectedCakeId] = useState("")

    const { cart } = useContext(DataContext);

    const totalQuantity = cart.reduce((sum, item) => sum + (item.product_qua || 0), 0);
    const itemsWithAtLeastOneQuantity = cart.filter(item => item.product_qua > 0)
    const selectedItem = cart.find(item => item.id === selectedCakeId);
    console.log("Selected item:", selectedItem);


    return (

        <>

            <div className='basket'>
                <div>
                    <p className='cart_title'>Your Cart ({totalQuantity})</p>
                    {itemsWithAtLeastOneQuantity.map((item) => (
                        <div>
                            <div className='product_info'>
                                <p className='product_name'>{item.name}</p>
                                <img onClick={() => console.log('Remove item clicked')} className='image' src='./images/icon-remove-item.svg' alt='remove item' />
                            </div>
                            <div className='total-prize'>
                                <p className='cart_count'>{item.product_qua}x</p>
                                <p className='item-prize'>@{item.price}</p>
                                <p className='item-dollar-prize'>${item.price * item.product_qua}</p>
                            </div>
                            <p className='product_quantity'></p>
                        </div>
                    ))}
                    <div className='order'>
                        <p className='order_total_label'>Order Total</p>
                        <p className='order_total_value'>{item.price}$</p>
                    </div>
                    <p className='carbon_neutral_delivery'>
                        <img
                            src={item.image}
                            alt="Product"
                        />
                        This is carbon neutral delivery
                    </p>
                    <button onClick={() => setOpenModal(true)} className='btn_order'>
                        Confirm Order
                    </button>
                </div >

                {openModal && <OpenModal onClose={() => setOpenModal(false)} />}
            </div>

        </>
    );
};

export default OrderSummary;