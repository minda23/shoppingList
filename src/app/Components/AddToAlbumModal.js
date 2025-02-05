"use client";
import React from "react";
import "./AddToAlbumModal.css"
import { useState, useEffect, useReducer, useContext } from "react";
import DataContext from "./dataContext";

const AddToAlbumModal = (props) => {
    const [error, setError] = useState("")
    const [state, dispatch] = useContext(DataContext)
    const [pickedAlbumId, setPickedAlbumId] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <div className="modal_items">
                    <div className="modal_text">
                        <span className="checked">&#10003;</span>
                        <h1>Order Confirmed</h1>
                        <p>We hope you enjoy your food</p>
                        <p></p>
                        <p>$8</p>

                    </div>

                    <div className="buttons1">
                        <button variant="contained" onClick={() => dispatch({ type: "CLOSE_MODAL" })} className="close">Submit Order</button>


                    </div>

                </div>
            </div>
        </div>
    )

}








export default AddToAlbumModal