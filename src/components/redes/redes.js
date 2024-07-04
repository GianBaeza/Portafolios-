import React from "react";
import "../redes/redes.css";

function RedesList({ redes }) {
  return (
    <>
      <div className="redes">
        <ul>
          {Object.entries(redes).map((red, index) => {
            const { icon, name, url } = red[1];
            return (
              <li key={index}>
                <a href={url}>
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
