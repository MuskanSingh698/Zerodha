import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 px-3 px-md-4 px-lg-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 px-3 px-md-4">
          <h1 className="fs-4 fs-md-3 fs-lg-2">{productName}</h1>
          <p className="mt-3">{productDesription}</p>

          {/* Links */}
          <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
            <a href={tryDemo} className="btn btn-primary">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-outline-secondary">
              Learn More
            </a>
          </div>

          {/* App Store Badges */}
          <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
