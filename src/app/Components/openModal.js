"use client";
import React, { useContext } from "react";
import DataContext from "./dataContext";
import "./openModal2.css";

const OpenModal = ({ onClose }) => {
    if (typeof onClose !== "function") {
        console.error("onClose prop must be a function");
        return null;
    }
    const { cart, setCart } = useContext(DataContext);

    // Filter items with quantity > 0
    const itemsWithAtLeastOneQuantity = cart.filter(item => item.product_qua > 0);

    // Delete item from the cart
    const deleteItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Handle the order submission and close the modal
    const handleSubmit = (e) => {
        e.preventDefault();
        onClose()
    };

    return (
        <div className="container">
            <div className="modal-overlay">
                <div className="modal-box">
                    <div className="modal_items">
                        <div className="modal_text">
                            <span className="checked">&#10003;</span>
                            <h1>Order Confirmed</h1>
                            <p>We hope you enjoy your food</p>

                            {/* Display cart items with quantity > 0 */}
                            {itemsWithAtLeastOneQuantity.map((item) => (
                                <div key={item.id}>
                                    <div className="product_info">
                                        <p className="product_name">{item.name}</p>
                                        <img
                                            onClick={() => deleteItem(item.id)} // Delete item when clicked
                                            className="image"
                                            src="./images/icon-remove-item.svg"
                                            alt="remove item"
                                        />
                                    </div>
                                    <div className="total-prize">
                                        <p className="cart_count">{item.product_qua}x</p>
                                        <p className="item-prize">@{item.price}</p>
                                        <p className="item-dollar-prize">${item.price * item.product_qua}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="order">
                                <p className="order_total_label">Order Total</p>
                                <p className="order_total_value">
                                    $
                                    {itemsWithAtLeastOneQuantity.reduce(
                                        (total, item) => total + item.price * item.product_qua,
                                        0
                                    )}
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="">
                        <button
                            variant="contained"
                            className="close"// Close the modal when clicked
                        >
                            Submit Order
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OpenModal;
