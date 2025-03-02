"use client"
import React from "react"
import { useState, useEffect, useRef } from 'react';
import './DesertCard.css';


const DesertCard = (props) => {

    const { imagePath, text,
    } = props;

    return (

        <div>

            <div id="your_card">
                <img src={imagePath} alt=""></img>
                {text}

            </div>


        </div>

    )
}

export default DesertCard