import React from "react";

function OpenAccount() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-50 py-5">
      <div className="text-center px-3">
        <h1 className="display-5 mb-3">Open a Zerodha account</h1>
        <p className="fs-6 fs-md-5 text-muted mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          className="btn btn-primary fs-6 fs-md-5 px-4 py-2"
          style={{ minWidth: "180px" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
