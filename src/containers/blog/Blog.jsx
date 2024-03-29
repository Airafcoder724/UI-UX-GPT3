import React from 'react'
import './blog.css'
import { blog1, blog2, blog3, blog4, blog5 } from '.'
import { Section } from '../../components'
const Blog = () => {
  return (
    <div className='gpt3__blog section_padding'>
      <div className='gpt3__blog-header'>
        <h1 className='gradient__text'>
        A lot is happening, 
        <br/>
        We are blogging about it.
        </h1>
      </div>

      <div className='gpt3__blog-container'> 
        <div className='gpt3__blog-container-groupA'> 
          <Section image={blog1} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>

        <div className='gpt3__blog-container-groupB'> 
            <Section image={blog2} date="Sep 26, 2021"  text="GPT-3 and Open  AI is the future. Let us exlore how it is?v"/>
            <Section image={blog3} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Section image={blog4} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Section image={blog5} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog