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
            I'm not really active on <p className="white"><a href="www.google.com">Linkedin</a></p> but you can stay in touch with me
            on <p className="white"><a href="www.google.com">Twitter</a></p> . Sometimes I blog about some of my work on <p className="white"><a href="www.google.com">Dev.to</a></p> and
            some experiments on <p className="white"><a href="www.google.com">Instagram</a></p>.
          </p>
        </div>
        <div data-aos="fade-up" className="resume">
            <button><a href="www.google.com"><AiOutlineFilePdf/><p className="re">Download Resume</p></a></button>
        </div>

        <div className="connect">
            <div className="insta">
                <BsInstagram/>
            </div>
            <div className="github"><BsGithub/></div>
            <div className="twitter">
              <FiTwitter/>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
