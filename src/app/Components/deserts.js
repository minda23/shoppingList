"use client";
import React, { useEffect, useState, useContext } from "react";
import DataContext from "./dataContext";
import AddToBasket from "./addToBasket";
import "./deserts.css";
import OrderSummary from "./orderSummary";

const Desert = () => {
    const [cart, setCart] = useState([]);
    const [selectedCakeId, setSelectedCakeId] = useState("")

    //Tak jednoznačne dobrá úloha by bola zobrazovať kliknute dezerty v košíku na pravo
    //  ako v tej príkladnej apke čo ste poslali :) Keby ste to náhodou mali príliš ľahké,
    //  tak môžete ešte tam aj pridať gombík vymazať ich s košíku ako to majú oni.
    //  A ináč, srandovna vec je že som si všimol že oni majú bug že keď kliknete vymazať z košíka, 
    // tak sa číslo nezmení na tom dezerte na ľavo 😆 
    // Takže keby ste náhodou ku tomu dostali, tak môžete to skúsiť urobiť ešte lepšie :)


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

    const selectedItem = cart.find(item => item.id === selectedCakeId);
    console.log("Selected item:", selectedItem);


    return (
        <DataContext.Provider value={{ cart, setCart }}>
            <>
                <h1 className="heading">Deserts</h1>
                <div className="desserts-container">
                    <div className="desserts-list">
                        {cart.map((dessert, key) => (
                            <div style={dessert.product_qua > 0 ? { border: "2px solid #C73B0F" } : {}} key={key} className="dessert-item">
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
                                        setSelectedCakeId(dessert.id)

                                    }} className="btn plus">+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="Basket">
                        {!selectedItem && <AddToBasket />}
                        {selectedItem && <OrderSummary item={selectedItem} />}
                    </div>


                </div>
            </>
        </DataContext.Provider>
    );
};

export default Desert;
