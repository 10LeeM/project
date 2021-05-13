const paths = {
  index: "/",
  doctors: "/doctors",
  login: "/login",
  
  register: "/register",
  dashboard: "/dashboard",
  doctorshome:"/doctorshome",
  pharmacyhome: "/pharmacyhome",
  doctorview: "/doctorview",
  cart: "/cart",
  about: "/about",
  productview: "/productview",
  footer: "/footer",

  common: {
    // appointments: "/appointments",
    // ewallet: "/e-wallet",
    history: "/history",
    products: "/products",
    messages: "/messages",
  
  },
  patient: {
    orders: "/orders",
    vitals: "/vitals",
    appointments: "/appointments",
    patientmessages: "/patientmessages",
    patientshistory: "/patientshistory",
    patientsorders: "/patientsorders",
    history: "/history",
    messages: "/messages",

  },
  doctor: {
    patients: "/patients",
  },
  admin: {
    doctors: "/admin/doctors",
    patients: "/admin/patients",
    products: "/admin/products",
    orders: "/admin/orders",
    history: "/admin/history",
    messages: "/admin/messages",
    message: "/admin/message",
    // ewallet: "/admin/ewallet",
  },
};

export default paths;
