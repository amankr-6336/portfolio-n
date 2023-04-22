import React from 'react'

import i from '../assets/detail.png'
import './Detail.scss'

function Detail() {
  return (
    <div className="detail">
       <div className="innerdetail">
           <div className="para">
            <p>As a frontend developer, my expertise lies in creating seamless and intuitive user experiences. I specialize in using cutting-edge technologies to produce high-quality web applications. Specifically, I have vast knowledge of ReactJS and NodeJS, which allow me to build complex and dynamic applications with ease.</p>
           </div>
           <div data-aos="fade-up" data-aos-once="true" className="imagee">
            <img src={i} alt="" />
           </div>
       </div>
   </div>
  )
}

export default Detail