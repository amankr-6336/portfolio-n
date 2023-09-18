import React,{useEffect} from 'react'
import r from '../assets/1174949_js_react js_logo_react_react native_icon.png'
import './Skill.scss'
import n from '../assets/node.png'
import j from '../assets/javascript-39395.png'
import m from '../assets/mo.png'
import e from '../assets/ex.png'
import re from '../assets/5848309bcef1014c0b5e4a9a.png'
import cs from '../assets/css.png'
import ht from '../assets/html5-logo-31813.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skill() {
    useEffect(()=>{
        AOS.init();
    },[])
  return (

     <div className="skill">
        <div className="innerskill">
        <div data-aos="fade-up" className="lang">
                <h1> Languagess, Frameworks & Tools</h1>
            </div>
             <div className="logos">
                <div data-aos="fade-right"   className="circle">
                    <div className="innercircle">
                        <img src={r} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" className="circle">
                    <div className="innercircle">
                        <img src={n} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="circle">
                    <div className="innercircle">
                        <img id='js' src={j} alt="" />
                    </div>
                </div> 
                <div data-aos="fade-right" data-aos-delay="300" className="circle">
                    <div className="innercircle">
                        <img id='e' src={e} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="400" className="circle">
                    <div className="innercircle">
                        <img src={re} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="500" className="circle">
                    <div className="innercircle">
                        <img id='cs' src={cs} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="600" className="circle">
                    <div className="innercircle">
                        <img src={ht} alt="" />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="700" className="circle">
                    <div className="innercircle">
                        <img src={m} alt="" />
                    </div>
                </div>

             </div>
            {/* <div data-aos="fade-up" className="lang">
                <h1> Languagess, Frameworks & Tools</h1>
            </div> */}
        </div>
     </div>
  )
}

export default Skill