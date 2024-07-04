import React from "react";
import "../from/form.css";
import RedesList from "../redes/redes";
import rede from "../redes/listRedes";
function Form() {
  return (
    <>
      <div className="containerF">
        <RedesList redes={rede} />

        <div className="form-container">
          <form className="form-content">
            <h2 className="form-title" id="contacto">
              Contacto
            </h2>
            <input type="text" className="form-input" placeholder="Nombre" />

            <input type="email" className="form-input" placeholder="Email" />

            <textarea className="form-textarea" placeholder="Deja tu mensaje" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
