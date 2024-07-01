import React from "react";
import Img from "../components/img/Home/yo-depositphotos-bgremover(1).png";
import "./Css/Home.css";

const Home = () => {
  const handleOpenPdf = () => {
    const curriculumUrl =
      "https://drive.google.com/file/d/1AWGGmAqYuCZ1wcpntBD3v27FOaP6Up6l/view?usp=sharing";
    window.open(curriculumUrl, "_blank");
  };

  return (
    <div id="/">
      <section className="sectionHome">
        <div className="divHome">
          <h1 className="h1Home">Gian Franco Baeza</h1>
          <h3 className="h3Home">Front End Developer </h3>

          <button className="CvHome" onClick={handleOpenPdf}>
            {" "}
            Open CV{" "}
          </button>
        </div>
        <spam className="white-line" />

        <picture className="container-pictureHome">
          <img src={Img} alt="ImgPricipal" className="imageHome" />
        </picture>
      </section>
    </div>
  );
};
export default Home;
