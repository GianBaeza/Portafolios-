import React from "react";
import imagenAbout from "../components/img/Home/sobremi.jpg";
import "./Css/About.css";

const About = () => {
  return (
    <div
      className="about-container custom-shape-divider-top-1719931178"
      id="about"
    >
      <section className="about-section">
        <h1 className="about-title">
          ABO<b>UT</b>
        </h1>

        <p className="about-text">
          <b>Hola mucho gusto</b> Me entusiasma el aprendizaje y el desarrollo
          personal. Mi profundo interés por la programación me impulsa
          constantemente a crecer y explorar nuevas tecnologías.{" "}
          <b>
            Me destaco por mi habilidad para trabajar en equipo , siendo
            responsable y comprometido en cada proyecto
          </b>
          . Creo firmemente que el intercambio de ideas y la cooperación son
          fundamentales para el éxito, y siempre estoy dispuesto a aportar y
          aprender de mis colegas. Soy un profesional <b>comprometido</b>.
        </p>
      </section>
    </div>
  );
};

export default About;
