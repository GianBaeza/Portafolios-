import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import img from "../components/img/Skills/Moon landing station.jpeg"
import "./Css/Skills.css"
import Html from "../components/img/Skills/Html.png"
import Css from "../components/img/Skills/Css.png"
import Sass from "../components/img/Skills/Sass.png"
import JavaScript from "../components/img/Skills/JavaScript.png"
import TypeScript from "../components/img/Skills/typescript.png"
import react from "../components/img/Skills/React.png"
import Boostrap from "../components/img/Skills/Bootrap.png"
import Firebase from "../components/img/Skills/Firebase.png"
import Figma from "../components/img/Skills/Figma.png"
import Social from "../components/Social";




const Skills = () => {


    return (
        <div id="skills" className="ContainerTotal">



            <section className="ContainerSkills">

                <h1 className="h1Skills"> Skills</h1>

                <div className="SeccionCard">

                    <div className="ContainerCard ">

                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />
                        <Card titulo="AppGB" description=" Eccomerce para Logitech " img={img} />


                    </div>

                    <h2 className="h2Lenguaje"> Lenguajes </h2>

                    <div className="containerLenguajes">

                        <Social/>

                    </div>



                </div>



            </section>




        </div>

    )
}

export default Skills;