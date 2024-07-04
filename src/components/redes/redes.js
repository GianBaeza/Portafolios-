import React from "react";
import "../redes/redes.css";

function RedesList({ redes }) {
  return (
    <>
      <div className="redes">
        <ul>
          {Object.entries(redes).map((red, index) => {
            const { icon, name, link } = red[1];
            return (
              <li key={index}>
                <a href={link} target="blank">
                  <img src={icon} alt={name} />
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default RedesList;
