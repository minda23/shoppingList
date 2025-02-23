import React from 'react';
import DataContext from "./dataContext";
import { useContext } from "react";



const AddToBasket = () => {
    const [state, dispatch] = useContext(DataContext)

    return (
        <div>
            <div>
                <p className='product_name'>here gonna be name of product</p>
                <p className='product_quantity'>1x @8.00 $8.00 <img className='image' src='/images/icon-remove-item.svg' alt='remove item'></img></p>
            </div>
            <div className='order'>
                <p className='order_total_label'>Order Total</p>
                <p className='order_total_value'>$8.00</p>
            </div>
            <p className='carbon_neutral_delivery'>
                <img className='image_carbon' src='/images/icon-carbon-neutral.svg' alt='carbon neutral'></img>
                This is carbon neutral delivery
            </p>
            <button onClick={() => dispatch({ type: "OPEN_MODAL" })} className='btn_order'>Confirm Order</button>
        </div>
    );
};

export default AddToBasket;