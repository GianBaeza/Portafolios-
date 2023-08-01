import React from "react";
import Card from "../components/Card";
import img from "../components/img/Skills/Moon landing station.jpeg"
import "./Css/Skills.css"

const Skills = () => {


    return (
        <div>
            <section className="ContainerSkills">
                <header className="HeaderSkills">

                    <h1 className="h1Skills"> Skills</h1>

                </header>

                <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img}/>

            </section>



        </div>

    )
}

export default Skills;