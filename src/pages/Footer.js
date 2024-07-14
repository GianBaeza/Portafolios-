import { useState } from "react";
import Form from "../components/from/Form";
import "../pages/Css/Footer.css";
import { Notificacion } from "../components/Alerta/Alerta";
import RedesList from "../components/redes/redes";
import rede from "../components/redes/listRedes";

function Footer() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [notificacion, setNotificacion] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const onSubmit = async (event) => {
  //   event.preventDefault();

  //   const object = {
  //     ...formData,
  //     access_key: "44ed91bc-0aff-4723-8f70-d9bb128e163f",
  //     message: `Hola Gian,\n\n${formData.message}\n\nSaludos,\n${formData.name} (${formData.email})`,
  //   };
  //   const json = JSON.stringify(object);

  //   try {
  //     const res = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: json,
  //     }).then((res) => res.json());

  //     if (res.success) {
  //       setNotificacion(true);
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       console.error("Error:", res);
  //       alert(
  //         "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert(
  //       "Hubo un error en la conexión. Por favor, verifica tu conexión a Internet."
  //     );
  //   }
  // };

  return (
    <>
      <div className="background-footer">
        {/* <Form
          onSubmit={onSubmit}
          formData={formData}
          handleChange={handleChange}
        /> */}
        {/* {notificacion && (
          <Notificacion
            notificacion={notificacion}
            resetNotificacion={() => setNotificacion(false)}
          />
        )} */}

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
