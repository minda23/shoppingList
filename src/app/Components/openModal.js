"use client";
import React, { useState, useEffect, useReducer, useContext } from "react";
import "./openModal.css";

const OpenModal = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <div className="modal_items">
                    <div className="modal_text">
                        <span className="checked">&#10003;</span>
                        <h1>Order Confirmed</h1>
                        <p>We hope you enjoy your food</p>
                        <p>$8</p>
                    </div>
                    <div className="buttons1">
                        <button
                            variant="contained"
                            className="close"
                            onClick={handleSubmit}
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
