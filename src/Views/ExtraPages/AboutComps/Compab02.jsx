import React from 'react'
import './aboutcomps.scss'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Compab02 = () => {
  return (
    <>
      <div id="compab02">
      <div class="circle-btn style2 btn-wrapper d-inline-flex"><a class="btn-icon"><i class="far fa-arrow-right"></i></a><div class="btn-text">
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
