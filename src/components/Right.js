import React,{useEffect} from 'react'
import p from '../assets/Blank 3 Grids Collage (1).png'
import {AiFillGithub} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import './Right.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Right() {
  useEffect(()=>{
    AOS.init();
},[])
  return (
   <div className="rightp">
    <div className="innerrightp">
            <div data-aos="flip-right" data-aos-duration='1000' className="righttimage">
                 <img src={p} alt="" />
            </div>
            <div  className="leftinfo">
                <h2 data-aos="fade-up" data-aos-delay="600"  className='title'>Trendy Threads</h2>
                <p data-aos="fade-up" data-aos-delay="900" >A platform for posting courses which are designed as per the Industry demand with full Career Assistance.</p>
                <div data-aos="fade-up" data-aos-delay="1000" className="links">
                <div className="githublink"><AiFillGithub/></div>
                <div className="demo"><BsArrowRight/></div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Right