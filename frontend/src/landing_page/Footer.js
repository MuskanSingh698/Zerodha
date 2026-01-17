import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container px-3 px-md-4 px-lg-5 border-top mt-5">
        
        {/* Top Links */}
        <div className="row mt-5 gy-4">

          {/* Logo */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <p className="small text-muted">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-3">
            <p className="fw-bold">Company</p>
            <a href="#" className="d-block  mb-1">About</a>
            <a href="#" className="d-block mb-1">Products</a>
            <a href="#" className="d-block mb-1">Pricing</a>
            <a href="#" className="d-block mb-1">Referral programme</a>
            <a href="#" className="d-block mb-1">Careers</a>
            <a href="#" className="d-block mb-1">Zerodha.tech</a>
            <a href="#" className="d-block mb-1">Press & media</a>
            <a href="#" className="d-block mb-1">Zerodha cares (CSR)</a>
          </div>

          {/* Support Links */}
          <div className="col-6 col-md-3">
            <p className="fw-bold">Support</p>
            <a href="#" className="d-block  mb-1">Contact</a>
            <a href="#" className="d-block mb-1">Support portal</a>
            <a href="#" className="d-block mb-1">Z-Connect blog</a>
            <a href="#" className="d-block mb-1">List of charges</a>
            <a href="#" className="d-block mb-1">Downloads & resources</a>
          </div>

          {/* Account Links */}
          <div className="col-12 col-md-3">
            <p className="fw-bold">Account</p>
            <a href="#" className="d-block mb-1">Open an account</a>
            <a href="#" className="d-block mb-1">Fund transfer</a>
            <a href="#" className="d-block mb-1">60 day challenge</a>
          </div>
        </div>

        {/* Legal / Disclaimer */}
        <div className="mt-5 text-muted small">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633. 
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. 
            Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238. 
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, 
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For complaints pertaining to securities broking, write to complaints@zerodha.com.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details: Name, PAN, Address, Mobile, Email. Benefits: Effective Communication, Speedy redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your mobile/email IDs with your stock brokers. Receive transaction info directly from Exchange. KYC is one-time through SEBI registered intermediary. Dear Investor, if subscribing to an IPO, use bank authorization for payments. We do not give stock tips. Report suspicious activity."
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
