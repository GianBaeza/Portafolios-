import React from "react";
import Card from "../components/Card";
import img from "../components/img/Skills/Moon landing station.jpeg"
import "./Css/Skills.css"
import "../components/Css/Card.css"


const Skills = () => {


    return (
        <div>
            <section className="ContainerSkills">
                <header className="HeaderSkills">

                    <h1 className="h1Skills"> Skills</h1>

                </header>
                <div className="ContainerCard">
                    
                <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img}/>
                <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img}/>
                <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img}/>


                </div>

                
            </section>



        </div>

    )
}

export default Skills;