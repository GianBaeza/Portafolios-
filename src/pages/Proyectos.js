import { Card } from "../components/Cards/Card";
import "./Css/Proyectos.css";
import Data from "../trabajos/Trabajos";

const Proyectos = () => {
  return (
    <div className="container-proyecto">
      <header>
        <h1>
          {" "}
          <b id="proyecto">Proye</b>ctos
        </h1>
      </header>
      <section>
        {Data.map((item) => {
          const { id, img, titulo, description, link1, link2, tegnologia } =
            item;
          return (
            <Card
              key={id}
              img={img}
              titulo={titulo}
              description={description}
              link1={link1}
              link2={link2}
              tegnologia={tegnologia}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Proyectos;
