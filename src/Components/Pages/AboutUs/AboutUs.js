import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'
import rinil2 from '../../../assets/img/rinil2.jpg'

function AboutUs() {
  return (
    <div className='container'>
      <div className="about-us-container">
        <div className="team-members">
          <h2>Our Team</h2>
          <div className="member-card">
            <img className='member-image' src={rinil2} alt='rinil' />
            <h3 className='member-name'>Rinil.K.V</h3>
            <p className='member-role'>Co-Founder</p>
          </div>
        </div>
        <div className="about-us-description">
          <h1 className='about-us-heading'>AboutUs</h1>
          <p>
            with a passion for empowering learners of all ages,our mission is to make eduvation accessible, engaging, and personalized through our cutting-edge educational technology platform. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs