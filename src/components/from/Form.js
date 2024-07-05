import React from "react";
import "../from/form.css";
import RedesList from "../redes/redes";
import rede from "../redes/listRedes";
function Form({ onSubmit, formData, handleChange }) {
  return (
    <>
      <div className="containerF">
        <RedesList redes={rede} />

        <div className="form-container">
          <form className="form-content" onSubmit={onSubmit}>
            <h2 className="form-title" id="contacto">
              Contacto
            </h2>
            <input
              type="text"
              className="form-input"
              placeholder="Nombre"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              className="form-input"
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              className="form-textarea"
              placeholder="Deja tu mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
