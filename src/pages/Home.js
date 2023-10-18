import React, { useEffect } from 'react'
import AboutMe from '../components/AboutMe'
import './Home.scss'
import Detail from '../components/Detail'
import git from '../assets/github-mark.png'
import gmail from '../assets/Gmail_Logo_128px.png'
import lin from '../assets/linkedin.png'
import ProjectHeading from '../components/ProjectHeading'
// import Left from '../components/Left'
import Right from '../components/Right'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skill from '../components/Skill'
import ProjectData from '../components/ProjectData'
import Left from '../components/Left'


function Home() {

  // console.log(ProjectData);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="home">
      <span id='github' data-aos="zoom-in" ><span data-aos="zoom-in" data-aos-delay="200" className='innerspan'><a href="https://github.com/amankr-6336"><img data-aos="zoom-in" data-aos-delay="600" src={git} alt="" /></a></span></span>
      <span id='gmail' data-aos="zoom-in"><span data-aos="zoom-in" data-aos-delay="200" className='innerspan'><a href="www.google.com"><img data-aos="zoom-in" data-aos-delay="600" src={gmail} alt="" /></a></span></span>
      <span data-aos="zoom-in" id='linkedin'><span data-aos="zoom-in" data-aos-delay="200" className='innerspan'><a href="https://www.linkedin.com/in/aman-kumar-269275170/"><img data-aos="zoom-in" data-aos-delay="600" src={lin} alt="" /></a></span></span>
      <div className="about">
        <AboutMe />
      </div>
      <div className="details">
        <Detail />
      </div>
      <div data-aos="fade-up" className="projectheadingsection">
        <ProjectHeading />
      </div>
      <div className="projects">
        {
          ProjectData.map((data, index) => (
            index%2===0 ?
            (<Left key={data._id} data={data}/>):(<Right key={data._id} data={data}/>)
          ))
        }

        {/* <Left/>
          <Right/> */}

      </div>

      <div className="tools">
        <Skill />
      </div>

      <div className="footerh">
        <Footer />
      </div>
    </div>
  )
}

export default Home