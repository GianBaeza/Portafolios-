import React from "react";
import imagen from "../components/img/Home/Diseño sin título (1) (1).png";
import "./Css/Home.css";

const Home = () => {
  const handleOpenPdf = () => {
    const curriculumUrl =
      "https://drive.google.com/file/d/1AWGGmAqYuCZ1wcpntBD3v27FOaP6Up6l/view?usp=sharing";
    window.open(curriculumUrl, "_blank");
  };

  return (
    <div id="inicio">
      <section className="home-section">
        <div className="home-container">
          <h1>Gian Franco Baeza</h1>
          <h2>Front End Developer</h2>
          <button onClick={handleOpenPdf}>Open CV</button>
        </div>
        <hr />

        <picture className="home-picture-container">
          <img src={imagen} alt="MainImage" />
        </picture>
      </section>
    </div>
  );
};

export default Home;
