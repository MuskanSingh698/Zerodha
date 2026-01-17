import React from "react";

function NotFound() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="text-center px-3">
        <h1 className="display-4 display-md-3 mb-3">404 Not Found</h1>
        <p className="fs-6 fs-md-5 text-muted">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
