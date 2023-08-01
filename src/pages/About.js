import React from "react";
import iconsAbout from "../components/img/About/compu.jpg";
import "./Css/About.css";
import Linkedin from "../components/img/About/icons8-linkedin.png";
import Github from "../components/img/About/icons8-github.png";
import X from "../components/img/About/icons8-twitter.png";





const About = () => {

   
    
    return (
        <div className="containerAbout" id="about">
            <section className="sectionAbout">

                <picture className="containerImg nimate-fade-right">

                    <img src={iconsAbout} alt="Aboutimg" className="imgAbout  " />

                </picture>



                <section className="aboutDescription">

                    <div className="content">
                        <h1 className="h1About">About.</h1>

                        <p className="p">I consider myself a responsible, hard-working and punctual person, with an excellent ability to work in a team and decisive in problems that arise. Easy to follow instructions and generate
                            quality results and above all a desire to continue learning.
                        </p>

                    </div>



                    <div className="redesContainer">

                        <a href="https://www.linkedin.com/in/gianbaeza/" Target="_blank"> <img src={Linkedin} alt="Linkedin" className="redes" /> </a>
                        <a href="https://github.com/Chi4n" Target="_blank"> <img src={Github} alt="GitHub" className="redes" /> </a>
                        <a href="https://twitter.com/Gianbaeza" Target="_blank"> <img src={X} alt="Twitter" className="redes" /> </a>
                    </div>

                </section>
            </section>
        </div>
    )
}

export default About;