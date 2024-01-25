import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CodingProfile.scss'
import leetCode from '../../assets/download.png'
import gfg from '../../assets/download (1).png'
import codingninja from '../../assets/download (2).png'

function CodingProfile() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="codingprofile">
            <div className="innercodingprofile">
                <div data-aos="fade-up" className="lang">
                    <h1> Coding Profile</h1>
                </div>

                <div className="list_profile">
                    <div className="box">
                        <div data-aos="fade-right" className="innerbox">
                            <a  rel="noreferrer"  target='_blank' href="https://leetcode.com/amankr6336/"> <div className="img_box"><img src={leetCode} alt="" /></div>  </a>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="100"  className="innerbox">
                            <a rel="noreferrer"  target='_blank' href="https://auth.geeksforgeeks.org/user/amankr6336/"> <div className="img_box"><img src={gfg} alt="" /></div>  </a>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="200" className="innerbox">
                            <a rel="noreferrer"  target='_blank' href="https://www.codingninjas.com/studio/profile/83a14c37-2274-480b-b36b-bffd212504a2"> <div className="img_box"><img src={codingninja} alt="" /></div>  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodingProfile