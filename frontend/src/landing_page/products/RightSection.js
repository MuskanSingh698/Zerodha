import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5 px-3 px-md-4 px-lg-5">
      <div className="row align-items-center">

        {/* Content Section */}
        <div className="col-12 col-md-6 order-2 order-md-1 px-3 px-md-4">
          <h1 className="fs-4 fs-md-3 fs-lg-2">{productName}</h1>
          <p className="mt-3">{productDesription}</p>

          <div className="mt-3">
            <a
              href={learnMore}
              className="btn btn-outline-secondary"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
