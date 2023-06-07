import React, { useState } from "react";
import "./styles.css";
import Logo from './logo.svg';

console.log(Logo)
export const ReactButton = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    
    return (
      <button id="vue-button" onClick={onIncrement}>
        <img src={Logo} id="icon"/>
        You reacted {count} times.</button>
    );
}