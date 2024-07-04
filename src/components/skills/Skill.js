import "../skills/skills.css";

function ListSkills({ name, img }) {
  return (
    <div className="container">
      <ul>
        <li>
          <p>{name}</p>
          <img src={img} alt="icon" />
        </li>
      </ul>
    </div>
  );
}

export default ListSkills;
