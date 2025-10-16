import React from 'react'
import './About.css'
export default function About() {
  return (
    <div className='About'>
        <div className='container vh-100 d-flex flex-column justify-content-center align-items-center text-center text-light'>
            <h2 className='text-uppercase fs-1 fw-bolder'>about component</h2>
            <div className='star-icon'>
                <i className="fa-solid fa-star" style={{ color: "#ffffff" }}></i>
            </div>
            <div className='d-flex flex-row m-2 p-2 text-start'>
                <div className='me-3'>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
