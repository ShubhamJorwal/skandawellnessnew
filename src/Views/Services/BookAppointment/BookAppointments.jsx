import React from 'react'
import './bookapts.scss'
import { RxCross2 } from 'react-icons/rx'

const BookAppointments = ({ isOpen, onClose }) => {
  return (
    <>
      <div id="bookaptpage">
        <div onClick={onClose} id="wholedivcontainbapt" className={`${isOpen ? 'opensidboktpxskw' : ''}`}></div>
      <div className={`sliderBookaptside ${isOpen ? 'opensidboktp' : ''}`}>
      <button className="close-btn" onClick={onClose}><RxCross2 /></button>
      <h2>Slider Content</h2>
      <p>This is the content of the slider component.</p>
    </div>
      </div>
    </>
  )
}

export default BookAppointments
