import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 px-3 px-md-4">
          <h1 className="mb-3 fs-4 fs-md-3 fs-lg-2">
            Free and open market education
          </h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            Varsity{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>

          <p className="mt-4 mt-md-5">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
