import React from 'react'
import './aboutcomps.scss'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Compab02 = () => {
  return (
    <>
      <div id="compab02">
      <div className="circle-btn style2 btn-wrapper d-inline-flex"><a className="btn-icon"><i className="far fa-arrow-right"></i></a><div className="btn-text">
        {/* <FaArrowRight /> */}
        <svg viewBox="0 0 150 150"><path id="textPathButton" d="M 0,75 a 75,75 0 1,1 0,1 z"></path><text><textPath href="#textPathButton">Skanda wellness Skanda wellness Skanda</textPath></text></svg>
        
        </div></div>

        <h1>Book an Appointment</h1>
        <span>
            <Link to={"/services"}>See Our Services</Link>
            <Link to={"/"}>Book Appointment</Link>
        </span>
      </div>
    </>
  )
}

export default Compab02
