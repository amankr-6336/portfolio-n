import React,{useEffect} from 'react'
import p from '../assets/Blank 3 Grids Collage (1).png'
import {AiFillGithub} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import './Left.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Left() {

  useEffect(()=>{
    AOS.init();
},[])
  return (
    <div className="leftp">
        <div className="innerleftp">
            <div data-aos="flip-left" data-aos-duration='1000' className="leftimage">
                 <img src={p} alt="" />
            </div>
            <div className="rightinfo">
                <h2 data-aos="fade-up" data-aos-delay="600" className='title'>Trendy Threads</h2>
                <p data-aos="fade-up" data-aos-delay="900">An online platform for Men fashion which comes with new designs and fast fashion clothes for mens.</p>
                <div data-aos="fade-up" data-aos-delay="1000" className="links">
                <div  className="githublink"><a rel="noreferrer" href="https://github.com/amankr-6336/e-commerce" target="_blank"><AiFillGithub/></a></div>
                <div  className="demo"><a rel="noreferrer" href="https://trendy-threads-e4zye.ondigitalocean.app/" target="_blank"><BsArrowRight/></a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Left