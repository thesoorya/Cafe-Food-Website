import React, { useState } from 'react';
import './CartButton.css';

const CartButton = ({ price }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const handleAdd = () => {
        if (quantity < 7) {
            setQuantity(quantity + 1);
            setTotalPrice(totalPrice + price);
        }
    };

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - price);
        }
    };

    const handleBuy = () => {
        const options = {
            key: 'rzp_test_8U4rFSo9yRl07J',
            key_secret: 'v2kbK2zyXcMUTeetmlc3HrJT',
            amount: price * 100, 
            currency: 'INR',
            name: 'Cafe 9¾',
            description: 'Educational Purpose',
            image: 'https://example.com/your_logo.png',
            prefill: {
                name: 'Soorya',
                email: 'sooryanarayanan1405@gmail.com',
                contact: '9999999999'
            },
            notes: {
                address: 'Razorpay Corporate Office'
            },
            theme: {
                color: '#5d1451'
            },
            handler: (response) => {
                alert('Payment successful: ' + response.razorpay_payment_id);
                // Add your logic to handle the successful payment here
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <div className="buy-button-container">
                <button onClick={handleSubtract} className="subtract-button">-</button>
                <span className="quantity">{quantity}</span>
                <button onClick={handleAdd} className="add-button">+</button>
            </div>

            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            <button onClick={handleBuy} className="buy-button">Buy</button>
        </>
    );
};

export default CartButton;