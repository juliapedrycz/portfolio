import React, {useRef} from 'react'
import "../styles/Home.css"
import {Button} from "./Button"
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  const aboutSection = useRef(null);
  const projectsSection = useRef(null);
  const skillsSection = useRef(null);

  const goToAboutSection = () =>
      window.scrollTo({
        top: aboutSection.current.offsetTop,
        behavior: "smooth"
      });

  const goToProjectsSection = () =>
      window.scrollTo({
        top: projectsSection.current.offsetTop,
        behavior: "smooth"
      });

  const goToSkillsSection = () =>
      window.scrollTo({
        top: skillsSection.current.offsetTop,
        behavior: "smooth"
      });

  const icons = {
    phone: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
    mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z',
  };

  return(
      <>
        <div className="home-contact">
          <div className="home-contact-row">
            <div className="home-contact-row-logo-text">
              <svg width="22" height="22" viewBox="20 20 1024 1024">
                <path d={icons["phone"]}  transform="scale(45,45)" fill="#ffffff "></path>
              </svg>
              <a>+48 669 489 005</a>
            </div>
            <div className="home-contact-row-logo-text">
              <svg width="22" height="22" viewBox="20 20 1024 1024">
                <path d={icons["mail"]}  transform="scale(45,45)" fill="#ffffff "></path>
              </svg>
              <a>julkapedrycz@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="home-container">

          <img src={`${process.env.PUBLIC_URL}/images/desk.jpg`}/>
          <p>Hi, I am</p>
          <a>Julia Pedrycz</a>
          <div className='home-btns'>
            <Button
                onClick={goToAboutSection}
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
              About Me
            </Button>
            <Button
                onClick={goToProjectsSection}
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
              Projects
            </Button>
            <Button onClick={goToSkillsSection}
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
              Skills
            </Button>
          </div>
        </div>
        <a className="section-divider"  ref={aboutSection}></a>
        <About/>
        <a  className="section-divider"  ref={projectsSection}></a>
        <Projects/>
        <a  className="section-divider"  ref={skillsSection}></a>
        <Skills/>
      </>
  )
}

export default Home;