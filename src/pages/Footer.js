import { useState } from "react";
import Form from "../components/from/Form";
import "../pages/Css/Footer.css";
import { Notificacion } from "../components/Alerta/Alerta";
import RedesList from "../components/redes/redes";
import rede from "../components/redes/listRedes";

function Footer() {
  return (
    <>
      <div className="background-footer">
        <div className="container-footer">
          <h3 id="contacto">
            <b>Cont</b>acto
          </h3>
          <RedesList redes={rede} />
        </div>
      </div>
      <div className="footerh4">
        <h4>CopyRight © Gian Baeza</h4>
      </div>
    </>
  );
}

export default Footer;
