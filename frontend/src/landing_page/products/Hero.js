import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 px-3 px-md-4 px-lg-5 py-3">
        
        {/* Heading */}
        <h1 className="fs-4 fs-md-3 fs-lg-2">Technology</h1>

        {/* Subheading */}
        <h3 className="text-muted mt-3 fs-6 fs-md-5">
          Sleek, modern and intuitive trading platforms
        </h3>

        {/* Paragraph / Link */}
        <p className="mt-3 mb-5 fs-6 fs-md-5">
          Check out our{" "}
          <a href="#" className="text-decoration-none fw-semibold">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </p>

      </div>
    </div>
  );
}

export default Hero;
