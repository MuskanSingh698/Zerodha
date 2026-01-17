import React from "react";

function Universe() {
  return (
    <div className="container mt-5 px-3 px-md-4 px-lg-5">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="fs-4 fs-md-3 fs-lg-2">The Zerodha Universe</h1>
        <p className="mt-2 fs-6 fs-md-5">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      {/* Logo Grid */}
      <div className="row mt-4 g-4 justify-content-center text-center">
        
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-4 col-lg-2">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Partner Logo"
              className="img-fluid mb-2"
              style={{ maxWidth: "120px" }}
            />
            <p className="text-muted small mb-0">Thematic investment platform</p>
          </div>
        ))}

      </div>

      {/* CTA Button */}
      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary fs-6 px-4 py-2">
          Signup Now
        </button>
      </div>

    </div>
  );
}

export default Universe;
