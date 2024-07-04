import "../skills/skills.css";

function ListSkills({ img }) {
  return (
    <div className="container">
      <ul>
        <li>
          <img src={img} alt="icon" />
        </li>
      </ul>
    </div>
  );
}

export default ListSkills;
