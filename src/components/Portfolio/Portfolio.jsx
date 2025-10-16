import React, { useState } from "react";
import "./Portfolio.css";
import Modal from "../Modal";
import img1 from "../../assets/imgi_1_poert1.png";
import img2 from "../../assets/imgi_2_port2.png";
import img3 from "../../assets/imgi_3_port3.png";  
export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img1, img2, img3];


  return (
    <section className="portfolio container">
      <h2 className="portfolio-title">PORTFOLIO COMPONENT</h2>
      <div className="portfolio-line">
        <span className="line"></span>
        <span className="star">★</span>
        <span className="line"></span>
      </div>

      <div className="portfolio-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="portfolio-card"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Portfolio ${index}`} />
            <div className="overlay">
              <span className="plus">+</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
}
