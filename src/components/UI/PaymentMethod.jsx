import React, { useState } from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentChange = (payment) => {
    setSelectedPayment(payment);
  };

  const handleReserveNow = () => {
    if (selectedPayment) {
      // Perform reservation logic here
      alert(`Reservation successful with ${selectedPayment}`);
    } else {
      alert("Please select a payment method");
    }
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Direct Bank Transfer"
            checked={selectedPayment === "Direct Bank Transfer"}
            onChange={() => handlePaymentChange("Direct Bank Transfer")}
          />{" "}
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Cheque Payment"
            checked={selectedPayment === "Cheque Payment"}
            onChange={() => handlePaymentChange("Cheque Payment")}
          />{" "}
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Master Card"
            checked={selectedPayment === "Master Card"}
            onChange={() => handlePaymentChange("Master Card")}
          />{" "}
          Master Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="Paypal"
            checked={selectedPayment === "Paypal"}
            onChange={() => handlePaymentChange("Paypal")}
          />{" "}
          Paypal
        </label>

        <img src={paypal} alt="" />
      </div>
      <div className="payment text-end mt-5">
        <button onClick={handleReserveNow}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
