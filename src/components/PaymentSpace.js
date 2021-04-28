import React from 'react'

function PaymentSpace() {
    return (
        <section className = "">
            <div className = "row border">
            <p className="h1 text-start m-3 px-2">
                Payment Details
            </p>
            <div className="form-check px-5 my-3 d-flex justify-content-start col-12">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label text-left" for="flexRadioDefault1" > 
            Pay through Credit & Debit Cards / Net Banking  / Wallets / Bharat QR / Pay on Delivery and Others
            <br/>
            Convenience Fee: ₹30/- + GST
        
            </label>
            </div>
            <div className="form-check px-5 my-3 d-flex justify-content-start col-12">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label text-left" for="flexRadioDefault2" >
            Pay through BHIM/UPI
            <br/>
            Convenience Fee: ₹20/- + GST
            </label>
            </div>
            </div>
        </section>
        
    )
}

export default PaymentSpace
