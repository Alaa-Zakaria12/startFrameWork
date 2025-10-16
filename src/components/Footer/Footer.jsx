import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer text-white text-center">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-md-4">
            <h2 className="text-uppercase fs-4 fw-bold mb-3">location</h2>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4">
            <h2 className="text-uppercase fs-4 fw-bold mb-3">around the web</h2>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <div className="icon-circle">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="icon-circle">
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="icon-circle">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icon-circle">
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h2 className="text-uppercase fs-4 fw-bold mb-3">about freelancer</h2>
            <p className="px-4">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
