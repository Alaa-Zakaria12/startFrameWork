import React from 'react'
import img from '../../assets/imgi_1_avataaars.svg'
import './Home.css'
export default function Home() {
  return (
    <div className='home'>
        <div className='align-items-center d-flex flex-column justify-content-center h-100'>
            <img className='mb-3' src={img} alt="img" />
        <div>
            <h2 className='text-uppercase fs-1 fw-bold text-light'>start framework</h2>
        </div>
        <div className='star-icon'>
            <i className="fa-solid fa-star" style={{ color: "#ffffff" }}></i>
        </div>
        <div className='text-light'>
            Graphic Artist - Web Designer - Illustrator
        </div>
        </div>
    </div>
  )
}
