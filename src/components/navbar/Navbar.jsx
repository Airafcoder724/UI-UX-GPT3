import React from 'react'
import './navbar.css'
import { useState } from 'react'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from "../../assets/logo.svg"

const Menu = () => {
  return (
    <>
      <p><a href="#Home">Home</a></p>
      <p><a href="#what_is">What is GPT </a></p>
      <p><a href="#openAi">OpenAi</a></p>
      <p><a href="#case">Case studies</a></p>
      <p><a href="#libray">Libray</a>
      </p>
    </>
  )
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="" />
        </div>
        <div className='gpt3__navbar-links_cotainer'>
          <Menu />
        </div>
      </div>

      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>

      {/* {For mobile view} */}

      <div className='gpt3__navbar-menu'>
        {toggle ? (
          <RiCloseLine size={27} color='#ffff' onClick={() => setToggle(false)} />)
          : <RiMenu3Line size={27} color='#ffff' onClick={() => setToggle(true)} />}

        {toggle &&
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_conatiner-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>

            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar