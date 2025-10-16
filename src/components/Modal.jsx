import React from "react";
import "../components/Portfolio/Portfolio.css"; // ممكن تنقلي الستايل بتاع المودال هنا لو حبيتي

export default function Modal({ image, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Selected" />
      </div>
    </div>
  );
}
