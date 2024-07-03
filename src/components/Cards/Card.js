import "./Card.css";
import { FaGithub } from "react-icons/fa";
import { GoLink } from "react-icons/go";

export function Card({ img, titulo, description, link1, link2, tegnologia }) {
  return (
    <div className="card">
      <img className="card-img-top" src={img} alt={titulo} />
      <div className="card-body">
        <h3>{titulo}</h3>
        <p className="card-text">{description}</p>
        <p className="card-tegnologia">{tegnologia}</p>
      </div>

      <div>
        <ul>
          <li>
            <a href={link1} target="blank">
              <FaGithub className="icon gihub" />
            </a>
          </li>
          <li>
            <a href={link2} target="blank">
              <GoLink className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
