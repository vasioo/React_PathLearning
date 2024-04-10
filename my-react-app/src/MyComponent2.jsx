import React, {useState} from 'react';

//ev handler and html form attributes

function MyComponent2(){

    const[name,setName] = useState("");
    const[quantity,setQuantity] = useState(1);
    const[comment,setComment] = useState("");
    const[payment,setPayment] = useState("Visa");
    const[shipping,setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(){
        setComment(event.target.value);
    }

    function handlePaymentChange(){
        setPayment(event.target.value);
    }

    function handleShipping(){
        setShipping(event.target.value);
    }

    return (
    <div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>
        
        <input value={quantity} onChange={handleQuantityChange} type='number'></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions...'></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Gitftcard">Gitftcard</option>
        </select>
        <p>Payment plan: {payment}</p>

        <label>
            <input type='radio' value="Pick up" checked={shipping === "Pick up"} onChange={handleShipping} />
            Pick Up
        </label>
<br></br>
        <label>
            <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
    );

}

export default MyComponent2