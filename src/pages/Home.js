import React from "react";
import Img from "../components/img/Home/yo.jpeg";
import "./Css/Home.css";
import About from "./About";


const Home = () => {

    const handleOpenPdf = () => {

        const curriculumUrl = 'https://drive.google.com/file/d/1AWGGmAqYuCZ1wcpntBD3v27FOaP6Up6l/view?usp=sharing';
        window.open(curriculumUrl, '_blank');
    }
    




    return (
        <div className="cotainerHome" id="/">
            <section className="sectionHome">

                <div className="divHome">
                    <h1 className="h1Home">Gian Franco Baeza</h1>
                    <h3 className="h3Home">Front End Developer </h3>
                    <p className="pHome">Developer Full Stack in Progress</p>

                    <button className="CvHome" onClick={handleOpenPdf} > Open CV </button>

                </div>
                <spam className="white-line" />

                <picture className="container-pictureHome">
                    <div className="divimg">
                        <img src={Img} alt="ImgPricipal" className="imageHome" />


                    </div>



                </picture>
                <footer className="svgI">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 1420 215" className="svgI">
                        <path fill='#2A5197' fill-opacity="1" d="M0,226L32.3,245.3C68.6,235,137,213,206,192C274.3,171,343,149,411,144C480,139,549,149,617,165.3C685.7,181,754,203,823,202.7C891.4,203,960,181,1029,192C1097.1,203,1166,245,1234,234.7C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                    </svg>

                </footer>




            </section>




        </div>




    )
}
export default Home;