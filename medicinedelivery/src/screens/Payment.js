import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [creditCardDetails, setCreditCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const navigate = useNavigate(); // Hook for navigating

    const handlePayment = async () => {
        const userEmail = localStorage.getItem("userEmail");

        const response = await fetch("http://localhost:5000/api/auth/payment/process", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                paymentMethod,
                email: userEmail,
                creditCardDetails
            })
        });

        const data = await response.json();
        if (data.success) {
            alert("Payment processed successfully!");
            navigate('/'); // Navigate to the home page
        } else {
            alert("Error processing the payment. Please try again.");
        }
    }

    return (
        <div style={{ backgroundImage: 'url("https://m.economictimes.com/thumb/msid-94270374,width-1200,height-900,resizemode-4,imgsize-34152/overuse-of-medicine.jpg")', backgroundSize: 'cover', height: '100vh' }}>
            <div className="container mt-0.5" style={{ color: 'black' }}>
                <h1>Select Payment Method</h1>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                    <label className="form-check-label" style={{ color: 'black' }}>
                        <i className="fas fa-money-bill-wave me-2"></i> Cash on Delivery
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={() => setPaymentMethod('creditCard')} />
                    <label className="form-check-label" style={{ color: 'black' }}>
                        <i className="far fa-credit-card me-2"></i> Credit Card
                    </label>
                </div>

                {paymentMethod === 'creditCard' && (
                    <div className="mt-3">
                        <input type="text" className="form-control mb-2" placeholder="Card Number" value={creditCardDetails.cardNumber} onChange={e => setCreditCardDetails(prev => ({ ...prev, cardNumber: e.target.value }))} />
                        <input type="text" className="form-control mb-2" placeholder="Expiry Date (MM/YY)" value={creditCardDetails.expiryDate} onChange={e => setCreditCardDetails(prev => ({ ...prev, expiryDate: e.target.value }))} />
                        <input type="text" className="form-control mb-2" placeholder="CVV" value={creditCardDetails.cvv} onChange={e => setCreditCardDetails(prev => ({ ...prev, cvv: e.target.value }))} />
                    </div>
                )}

                <button className="btn btn-primary mt-3" onClick={handlePayment}>Complete Payment</button>
            </div>
        </div>
    );
}

export default Payment;
