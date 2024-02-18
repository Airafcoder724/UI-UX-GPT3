import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section_padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the 
          <br/>
          future before others
        </h1>
        <div className='gpt3__footer-heading__btn'>
           <p>Request Early Access</p>
        </div>
      </div>

      <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links-logo'>
              <img src={logo} alt="" />
              <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
          </div>

          <div className='gpt3__footer-links__div'>
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
          </div>

          <div className='gpt3__footer-links__div'>
              <h4>Company</h4>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
              <p>Contact</p>
          </div>

          <div className='gpt3__footer-links__div'>
            <h4>Get in touch</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
          </div>
      </div>
    </div>
  )
}

export default Footer