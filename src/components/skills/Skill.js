import "../skills/skills.css";
import "animate.css";
import { useInView } from "react-intersection-observer";

function ListSkills({ name, img }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="container">
      <ul
        className={`list-item ${
          inView ? "animate__animated animate__fadeInRight" : ""
        }`}
      >
        <li ref={ref}>
          <p>{name}</p>
          <img src={img} alt="icon" />
        </li>
      </ul>
    </div>
  );
}

export default ListSkills;
