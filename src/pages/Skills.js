import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import img from "../components/img/Skills/Moon landing station.jpeg"
import "./Css/Skills.css"



const Skills = () => {
    

    return (
        <div id="skills" className="ContainerTotal">

            <section className="ContainerSkills">
                <header className="HeaderSkills">


                    <h1 className="h1Skills"> Skills</h1>

                </header>
                <div className="ContainerCard">

                    <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                    <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                    <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />


                </div>


            </section>



        </div>

    )
}

export default Skills;