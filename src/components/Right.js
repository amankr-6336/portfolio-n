import React,{useEffect} from 'react'

import {AiFillGithub} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'
import './Right.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Right({data}) {
  useEffect(()=>{
    AOS.init();
},[])
  return (
   <div className="rightp">
    <div className="innerrightp">
            <div data-aos="flip-right" data-aos-duration='1000' className="righttimage">
                 <img src={data.img} alt="" />
            </div>
            <div  className="leftinfo">
                <h2 data-aos="fade-up" data-aos-delay="600"  className='title'>{data.title}</h2>
                <p data-aos="fade-up" data-aos-delay="900" >{data.desc}</p>
                <div data-aos="fade-up" data-aos-delay="1000" className="links">
                <div className="githublink"><a rel="noreferrer" href={data.link1} target="_blank"><AiFillGithub /></a></div>
                <div className="demo"><a rel="noreferrer" href={data.link2} target="_blank"><BsArrowRight className='tick'/></a></div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Right