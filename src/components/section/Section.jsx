import React from 'react'
import './section.css'
const Section = ({image , text , date}) => {
  return (
    <div className='gpt3__blog-container-article'>
      <div className='gpt3__blog-conatiner-article__image'>
        <img src={image} alt="" />
      </div>

      <div className='gpt3__blog-conatiner-article__content' >
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <p>read full article</p>
      </div>

    </div>
  )
}

export default Section