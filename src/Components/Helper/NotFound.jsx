import React from "react";

const NotFound = () => {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col">
          <h1 className="display-4 text-danger">404</h1>
          <p className="lead">Page Not Found</p>
          <p>The page you are looking for doesn't exist.</p>
          visit <a className="text-decoration-none" href="vallarasuk.com">vallarasuk.com</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
