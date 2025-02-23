"use client";
import React, { useEffect, useReducer, useContext } from "react";
import DataContext from "./dataContext";
import AddToAlbumModal from "./AddToAlbumModal";
import AddToBasket from "./addToBasket";
import "./deserts.css";
import OrderSummary from "./OrderSummary";


const initialState = {
    desserts: [],
    count: 0,
    isModalOpen: false,

};



const myReducer = (state, dispatchedAction) => {
    switch (dispatchedAction.type) {
        case "GET_DESSERT":
            return {
                ...state,
                desserts: dispatchedAction.value
            };
        case "increment":
            return {
                ...state,
                count: state.count + 1
            };
        case "decrement":
            return {
                ...state,
                count: state.count - 1
            };

        case "OPEN_MODAL":
            const newAudio2 = dispatchedAction.value2;
            return {
                ...state,
                isModalOpen: true,
                modalSong: newAudio2,
            };

        case "CLOSE_MODAL":
            return {
                ...state,
                isModalOpen: false,
                modalSong: null,
            };
        default:
            return state;
    }
};

const Desert = () => {
    const [state, dispatch] = useReducer(myReducer, initialState);

    const openBasket = state.count === 1 ? <AddToBasket /> : <OrderSummary />


    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => dispatch({ type: "GET_DESSERT", value: data }))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <DataContext.Provider value={[state, dispatch]}>
            {state.isModalOpen === true ? <AddToAlbumModal /> : null}
            <h1 className="heading">Deserts</h1>
            <div className='desserts-container'>
                <div className='desserts-list'>
                    {state.desserts.map((dessert, index) => (
                        <div key={index} className='dessert-item'>
                            <div className='dessert-image-container'>
                                <picture className='dessert-image'>
                                    <source srcSet={dessert.image.desktop} media='(min-width: 1024px)' />
                                    <source srcSet={dessert.image.tablet} media='(min-width: 768px)' />
                                    <source srcSet={dessert.image.mobile} media='(min-width: 100px)' />
                                    <img
                                        src={dessert.image.thumbnail}
                                        alt={dessert.name}
                                        className='dessert-thumbnail'
                                    />
                                </picture>

                            </div>
                            <div className='dessert-details'>
                                <span className='dessert-category'>{dessert.category}</span>
                                <p className='dessert-name'>{dessert.name}</p>
                                <p className='dessert-price'>${dessert.price}</p>

                            </div>
                            <div class="quantity-controls">
                                <button onClick={() => dispatch({ type: "decrement" })} className="btn minus">-</button>
                                <span class="quantity">{state.count}</span>
                                <button onClick={() => dispatch({ type: "increment", value: openBasket })} className="btn minus">+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="Basket">


                </div>
            </div>
        </DataContext.Provider>
    );
};

export default Desert;
