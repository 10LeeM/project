import React from "react";
import { Switch } from "react-router";
import Dummy from "../components/Dummy";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Index from "../pages/Index";
import GuestRoute from "./layouts/GuestRoute";
import DashRoute from "./layouts/DashRoute";
import paths from "./paths";
import NotFound from "../components/layout/NotFound";
import Doctors from "../pages/admin/Doctors";
import Patients from "../pages/admin/Patients";
import Products from "../pages/admin/Products";
import Vitals from "../pages/patient/Vitals";
import Doctorshome from "../pages/guests/Doctorshome";
import Pharmacyhome from "../pages/guests/Pharmacyhome";
import Footer from "../pages/guests/Footer";
import DoctorView from "../pages/guests/single/DoctorView";
import ProductView from "../pages/guests/single/ProductView";
import Cart from "../pages/guests/single/Cart";
import Message from "../message/Message";
import Messages from "../pages/patient/Messages";
import Orders from "../pages/admin/Orders";
import HistoryAdmin from "../pages/admin/HistoryAdmin";
import MessagesAdmin from "../pages/admin/MessagesAdmin";

const Routes = () => {
  return (
    <>
      <Switch>
        {/* <GuestRoute path="/dummy/:id" component={Dummy} exact /> */}
        <GuestRoute path={paths.index} component={Index} exact />
        <GuestRoute path={paths.login} component={Login} exact />
        <GuestRoute path={paths.register} component={Register} exact />

        <GuestRoute path={paths.doctorshome} component={Doctorshome} exact />
        <GuestRoute path={paths.pharmacyhome} component={Pharmacyhome} exact />
        <GuestRoute path={paths.doctorview} component={DoctorView} exact />
        <GuestRoute path={paths.productview} component={ProductView} exact />
        <GuestRoute path={paths.cart} component={Cart} exact />
        <GuestRoute path={paths.footer} component={Footer} exact />
        <DashRoute path={paths.dashboard} component={Dummy} />

        {/* Admin */}
        <DashRoute path={paths.admin.doctors} component={Doctors} />
        <DashRoute path={paths.admin.patients} component={Patients} />
        <DashRoute path={paths.admin.products} component={Products} />
        <DashRoute path={paths.admin.orders} component={Orders} />
        <DashRoute path={paths.admin.history} component={HistoryAdmin} />
        <DashRoute path={paths.admin.messages} component={MessagesAdmin} />
        <GuestRoute path={paths.admin.message} component={Message} exact />

        {/* Doctor */}
        <DashRoute path={paths.doctor.patients} component={Patients} />

        {/* client */}
        <DashRoute path={paths.doctors} component={Doctors} />
        <DashRoute path={paths.patient.vitals} component={Vitals} />
        <DashRoute path={paths.common.messages} component={Messages} />
        {/* <DashRoute path={paths.} component={Products} /> */}

        <DashRoute path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
