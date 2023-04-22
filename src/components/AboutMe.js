import React, { useEffect } from "react";
import p from "../assets/p12logo.jpg";
import "./Aboutme.scss";
import { HiOutlineMinus } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="aboutme">
      <div className="inneraboutme">
        <div className="toppart">
          <div className="image">
            <img src={p} alt="" />
          </div>
          <div className="available">
            <HiOutlineMinus id="line" />
            <p>Available For Work</p>
          </div>
        </div>

        <div className="middlepart">
          <h1>
            <div data-aos="fade-up" data-aos-delay="1000" id="one">
              Hello!
            </div>{" "}
            <div data-aos="fade-up" data-aos-delay="1200" id="two">
              I'm
            </div>{" "}
            <div data-aos="fade-up" data-aos-delay="1400" id="three">
              Aman
            </div>{" "}
          </h1>
        </div>
        <div className="bottompart">
          <h1> <div data-aos="fade-up" data-aos-delay="1000" id="on">I'm</div> <div data-aos="fade-up" data-aos-delay="1200" id="to">developing  </div> <div data-aos="fade-up" data-aos-delay="1300"  id="fo">Creative & </div> <div  data-aos-delay="1400" data-aos="fade-up" id="th">Interactive webapps 🚀</div> </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
