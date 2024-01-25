import React,{useEffect} from "react";
import {AiOutlineFilePdf} from 'react-icons/ai'
import {BsInstagram,BsGithub} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import './Footer.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {

  useEffect(()=>{
    AOS.init();
},[])
  return (
    <div className="footer">
      <div className="innerfooter">
        <div data-aos="fade-right" className="intrested">
          <h1>Interested?</h1>
          <h1>Let's Get In Touch!</h1>
        </div>
        <div data-aos="fade-up" className="desc">
          <p className="dark">
            I'm really active on <p className="white"><a href="www.linkedin.com/in/amankr6336">Linkedin</a></p> and you can also stay in touch with me
            on <p className="white"><a href="www.google.com">Twitter</a></p> . Sometimes I blog about some of my work on <p className="white"><a href="www.google.com">Dev.to</a></p> and
            some experiments on <p className="white"><a href="www.google.com">Instagram</a></p>.
          </p>
        </div>
        <div data-aos="fade-up" className="resume">
            <button><a href={require("./Aman_kumar_cv_.pdf")} download="AmankrCV"><AiOutlineFilePdf/><p className="re">Download Resume</p></a></button>
        </div>

        <div className="connect">
            <div className="insta">
                <a rel="noreferrer" href="https://www.instagram.com/amankr.6336/" target="_blank"><BsInstagram/></a>
            </div>
            <div className="github"> <a rel="noreferrer" href="https://github.com/amankr-6336" target="_blank"><BsGithub/></a></div>
            <div className="twitter">
              <FiTwitter/>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
