import React from 'react'
import "../styles/About.css"
import {Button} from "./Button";

function About() {
return(
    <>
      <div className="about-container">
        <img src={`${process.env.PUBLIC_URL}/images/me.jpg`}/>
        <div className="about-text-container">
          <a>Hi, I'm Julia Pedrycz, <br/>
          I'm hardworking and energetic IT student with many other passions such as painting, embroidery and icons writing. My strongest attributes are patience, punctuality and friendliness. <br/>

          <br/><br/>Education: <br/>
            <br/>Tadeusz Kościuszko University of Technology (2017-2021)<br/>
          Bachelor of Science - BS, Computer Science <br/>

            <br/>Tadeusz Kościuszko University of Technology (Currently)<br/>
            Master of Science - MS, Computer Science <br/>

            <br/><br/>Experience: <br/>
            <br/>Krameko sp. z o.o. (2019)<br/>
            Android Developer - creating "Kalkulator miąższości" application.<br/><br/>

          </a>

          <div className="about-btn-container">
            <Button linkTo={`${process.env.PUBLIC_URL}/Julia_Pedrycz_resume.pdf`}
                    className='btns'
                    buttonStyle='btn--resume'
            >
              Resume
            </Button>
            <Button linkTo={'https://play.google.com/store/apps/developer?id=Julia+Pedrycz'}
                    className='btns'
                    buttonStyle='btn--play'
            >
              Google Play
            </Button>
            <Button linkTo={'https://github.com/juliapedrycz'}
                    className='btns'
                    buttonStyle='btn--github'
            >
              GitHub
            </Button>
            <Button linkTo={'https://www.linkedin.com/in/julia-pedrycz-5a15151aa/'}
                    className='btns'
                    buttonStyle='btn--linkedin'
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </>
)
}
export default About;