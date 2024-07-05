import { useEffect } from "react";
import Swal from "sweetalert2";
import "../Alerta/alerta.css";

export function Notificacion({ notificacion, resetNotificacion }) {
  useEffect(() => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Envío exitoso!",
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        content: "custom-content",
      },
    }).then(() => {
      resetNotificacion();
    });
  }, [notificacion, resetNotificacion]);
  return null;
}
