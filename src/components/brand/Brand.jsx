import React from 'react'
import './brand.css'
import { shopify ,google , slack , atlassian  ,dropbox} from './index'
const Brand = () => {
  return (
   <div className='gpt3__brand section_padding '>
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
   </div>
  )
}

export default Brand