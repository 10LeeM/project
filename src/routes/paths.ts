const paths = {
  index: "/",
  doctors: "/doctors",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  doctorshome:"/doctorshome",
  pharmacyhome: "/pharmacyhome",

  common: {
    appointments: "/appointments",
    ewallet: "/e-wallet",
    history: "/history",
    products: "/products",
    messages: "/messages",
  },
  patient: {
    orders: "/orders",
    vitals: "/vitals",
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
    ewallet: "/admin/ewallet",
  },
};

export default paths;
