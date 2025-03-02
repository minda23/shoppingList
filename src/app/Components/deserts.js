"use client";
import React, { useEffect, useState } from "react";
import OpenModal from "./openModal";
import AddToBasket from "./addToBasket";
import "./deserts.css";
import OrderSummary from "./OrderSummary";

const Desert = () => {
    const [desserts, setDesserts] = useState([]);
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setDesserts(data));
    }, []);

    const [showAddToBasket, setShowAddToBasket] = useState(false);

    const handleAddToBasketClick = () => {
        setShowAddToBasket(true);
    };

    return (
        <>
            <h1 className="heading">Deserts</h1>
            <div className="desserts-container">
                <div className="desserts-list">
                    {desserts.map((dessert, index) => (
                        <div key={index} className="dessert-item">
                            <div className="dessert-image-container">
                                <picture className="dessert-image">
                                    <source
                                        srcSet={dessert.image.desktop}
                                        media="(min-width: 1024px)"
                                    />
                                    <source
                                        srcSet={dessert.image.tablet}
                                        media="(min-width: 768px)"
                                    />
                                    <source
                                        srcSet={dessert.image.mobile}
                                        media="(min-width: 100px)"
                                    />
                                    <img
                                        src={dessert.image.thumbnail}
                                        alt={dessert.name}
                                        className="dessert-thumbnail"
                                    />
                                </picture>
                            </div>

                            <div className="dessert-details">
                                <span className="dessert-category">{dessert.category}</span>
                                <p className="dessert-name">{dessert.name}</p>
                                <p className="dessert-price">${dessert.price}</p>
                            </div>

                            <div className="quantity-controls">
                                <button onClick={decrementCounter} className="btn minus">-</button>
                                <span className="quantity">{counter}</span>
                                <button onClick={incrementCounter} className="btn plus">+</button>
                            </div>


                        </div>
                    ))}
                </div>
                <div className="Basket">
                    <OrderSummary />
                    <AddToBasket />
                </div>
            </div>

        </>
    );
};

export default Desert;
