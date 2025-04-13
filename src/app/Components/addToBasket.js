import React, { useState } from 'react';
import OpenModal from './openModal';
import './addToBasket.css';


const AddToBasket = (props) => {
    const { item } = props;
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className='basket'>
                <div>
                    <p className='product_name'>{item.name}</p>
                    <p className='product_quantity'>

                        <img onClick={() => console.log('Remove item clicked')} className='image' src='/images/icon-remove-item.svg' alt='remove item' />
                    </p>
                </div>
                <div className='order'>
                    <p className='order_total_label'>Order Total</p>
                    <p className='order_total_value'>{item.price}</p>
                </div>
                <p className='carbon_neutral_delivery'>
                    <img
                        className='image_carbon'
                        src='/images/icon-carbon-neutral.svg'
                        alt='carbon neutral'
                    />
                    This is carbon neutral delivery
                </p>
                <button onClick={() => setOpenModal(true)} className='btn_order'>
                    Confirm Order
                </button>
            </div>

            {openModal && <OpenModal onClose={() => setOpenModal(false)} />}
        </>
    );
};

export default AddToBasket;
