"use client";
import React, { useEffect, useState, useContext } from "react";
import DataContext from "./dataContext";
import AddToBasket from "./addToBasket";
import "./deserts.css";
import OrderSummary from "./OrderSummary";

const Desert = () => {
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);


    const onShowClick = () => {
        if (show === false) {
            setShow(true)
        }
        else setShow(false)
    }


    const onShowClick1 = () => {
        if (show1 === false) {
            setShow1(true)
        }
        else setShow(false)
    }

    const incrementCounter = (card_id) => {
        setCart(cart =>
            cart.map((item) =>
                card_id === item.id
                    ? { ...item, product_qua: (item.product_qua || 0) + 1 }
                    : item
            )
        );
    };

    const decrementCounter = (card_id) => {
        setCart(cart =>
            cart.map((item) =>
                card_id === item.id && item.product_qua > 0
                    ? { ...item, product_qua: item.product_qua - 1 }
                    : item
            )
        );
    };

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) =>
                setCart(data.map(item => ({ ...item, product_qua: 0 })))
            );
    }, []);

    return (
        <DataContext.Provider value={[]}>
            <>
                <h1 className="heading">Deserts</h1>
                <div className="desserts-container">
                    <div className="desserts-list">
                        {cart.map((dessert, key) => (
                            <div key={key} className="dessert-item">
                                <div className="dessert-image-container">
                                    <picture className="dessert-image">
                                        <source srcSet={dessert.image.desktop} media="(min-width: 1024px)" />
                                        <source srcSet={dessert.image.tablet} media="(min-width: 768px)" />
                                        <source srcSet={dessert.image.mobile} media="(min-width: 100px)" />
                                        <img src={dessert.image.thumbnail} alt={dessert.name} className="dessert-thumbnail" />
                                    </picture>
                                </div>

                                <div className="dessert-details">
                                    <span className="dessert-category">{dessert.category}</span>
                                    <p className="dessert-name">{dessert.name}</p>
                                    <p className="dessert-price">${dessert.price}</p>
                                </div>

                                <div className="quantity-controls">
                                    <button onClick={() => decrementCounter(dessert.id)} className="btn minus">-</button>
                                    <span className="quantity">{dessert.product_qua}</span>
                                    <button onClick={() => {
                                        incrementCounter(dessert.id);
                                        onShowClick();
                                        { !!show && <AddToBasket /> }
                                    }} className="btn plus">+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="Basket">
                        <OrderSummary />

                    </div>
                </div>
            </>
        </DataContext.Provider>
    );
};

export default Desert;
