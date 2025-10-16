import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section text-center py-5">
      <div className="container">
        {/* Title */}
        <h2 className="text-uppercase fw-bold mb-3">contact section</h2>

        {/* Divider with star */}
        <div className="divider d-flex align-items-center justify-content-center mb-5">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line ms-3"></div>
        </div>

        {/* Form */}
        <form className="contact-form mx-auto">
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
              id="floatingUserName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingUserName">userName</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="number"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
              id="floatingUserAge"
              placeholder="Enter your age"
            />
            <label htmlFor="floatingUserAge">userAge</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
              id="floatingUserEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingUserEmail">userEmail</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
              id="floatingUserPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingUserPassword">userPassword</label>
          </div>

          <button type="submit" className="btn send-btn">
            send Message
          </button>
        </form>
      </div>
    </section>
  );
}
