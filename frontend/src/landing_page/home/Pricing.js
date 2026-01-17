import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Left Content */}
        <div className="col-12 col-lg-5 mb-4 mb-lg-0">
          <h1 className="mb-3 fs-4 fs-md-3 fs-lg-2">
            Unbeatable pricing
          </h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-semibold">
            See Pricing{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Cards */}
        <div className="col-12 col-lg-7">
          <div className="row text-center g-3">
            <div className="col-12 col-md-6">
              <div className="p-4 border h-100">
                <h1 className="mb-3">₹0</h1>
                <p className="mb-0">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="p-4 border h-100">
                <h1 className="mb-3">₹20</h1>
                <p className="mb-0">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
