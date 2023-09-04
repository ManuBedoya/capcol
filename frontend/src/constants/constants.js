const baseUrlBackend = process.env.REACT_APP_BASE_URL_BACKEND;

/* ------------------------------------------------------------------
                  URLS TO SOCIAL MEDIA
----------------------------------------------------------------------*/
export const url_gmail =
  "https://mail.google.com/mail/u/0/?fs=1&to=manuelfernandobedoya@gmail.com&su=<RAZONDELCORREO>&body=<DETALLECORREO>&tf=cm";
export const url_wpp = "https://wa.link/bk3xvr";

/* ------------------------------------------------------------------
                  URLS TO API BACKEND
----------------------------------------------------------------------*/
export const urlLogin = baseUrlBackend + "api/v1/getUser/";
export const urlBuyWithOutLogin = baseUrlBackend + "api/v1/buyWithOutLogin/";
export const urlGetProducts = baseUrlBackend + "api/v1/products/";

/* ------------------------------------------------------------------
                  URLS TO EXTERNAL APIs
----------------------------------------------------------------------*/
export const urlDepartments = "https://api-colombia.com/api/v1/Department";

/* ------------------------------------------------------------------
                  MESSAGES TO SHOW USER
----------------------------------------------------------------------*/
export const chooseDepartmentMessage = "Elegir Departamento";
export const confirmBuyMessages = {
  title: "Pedido Confirmado",
  detail:
    "Estamos validando tu pedido, te estaremos notificando por correo los avances con tu pedido",
};

export const errorGenerateOrder =
  "Error al generar el pedido, revise nuevamente los campos e intentelo de nuevo";

export const emptyFields = "Campos vacios";

/* ------------------------------------------------------------------
                  CONSTANTS TO COMPARE OR DEFAULT VALUES
----------------------------------------------------------------------*/
