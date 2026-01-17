import React from "react";

function Stats() {
  return (
    <div className="container px-3 px-md-4 px-lg-5 my-5">
      <div className="row align-items-center">
        
        {/* Left Content */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <h1 className="fs-4 fs-md-3 fs-lg-2 mb-4">
            Trust with confidence
          </h1>

          <h2 className="fs-5 mt-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5 mt-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5 mt-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 mt-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Right Image & Links */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            
          />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="text-decoration-none fw-semibold">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>

            <a href="#" className="text-decoration-none fw-semibold">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
