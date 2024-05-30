import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const stripePromise = loadStripe("your_stripe_public_key");

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);

    const response = await fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
      {error && <div>{error}</div>}
      {paymentSuccess && <div>Payment Successful!</div>}
    </form>
  );
};

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentChange = (payment) => {
    setSelectedPayment(payment);
  };

  const handleReserveNow = () => {
    if (selectedPayment === "Master Card") {
      // Trigger Stripe payment form
    } else if (selectedPayment === "Paypal") {
      // Trigger PayPal payment (handled in PayPal button)
    } else {
      alert(`Reservation successful with ${selectedPayment}`);
    }
  };

  return (
    <>
      <div className="payment">
        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Direct Bank Transfer"
            checked={selectedPayment === "Direct Bank Transfer"}
            onChange={() => handlePaymentChange("Direct Bank Transfer")}
          /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Cheque Payment"
            checked={selectedPayment === "Cheque Payment"}
            onChange={() => handlePaymentChange("Cheque Payment")}
          /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Master Card"
            checked={selectedPayment === "Master Card"}
            onChange={() => handlePaymentChange("Master Card")}
          /> Master Card
        </label>
        <img src={masterCard} alt="Master Card" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Paypal"
            checked={selectedPayment === "Paypal"}
            onChange={() => handlePaymentChange("Paypal")}
          /> Paypal
        </label>
        <img src={paypal} alt="Paypal" />
      </div>

      {selectedPayment === "Master Card" && (
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={5000} />
        </Elements>
      )}

      <div className="payment text-end mt-5">
        <button onClick={handleReserveNow}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
