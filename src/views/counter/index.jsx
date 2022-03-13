import React, { useState } from "react";
import Button from "../../components/button";
import './styles.css';

const CounterPage = () => {
    const [counterNumber, setCounterNumber] = useState(0);
    /* function to increase couneter number by one*/
    const inscrease = () => {
        setCounterNumber(counterNumber + 1);
    }

    /* function to decrease counter number by one */
    const descrease = () => {
        setCounterNumber(counterNumber - 1);
    }

    /* function to reset our counter number */
    const reset = () => {
        setCounterNumber(0);
    }

    return (
        <div className="counter-container">
            <div className="counter-sub-container">
            <h1>Counter {counterNumber}</h1>
            <div className="buttons-wrapper">
               <Button onClick={() => inscrease()} label="INCREASE"/>
               <Button onClick={() => reset()} label="RESET"/>
               <Button onClick={() => descrease()} label="DECREASE"/>
            </div>
            </div>
        </div>
    )
}
export default CounterPage;