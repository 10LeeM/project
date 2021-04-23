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


const Routes = () => {
  return (
    <>
      <Switch>
        {/* <GuestRoute path="/dummy/:id" component={Dummy} exact /> */}
        <GuestRoute path={paths.index} component={Index} exact />
        <GuestRoute path={paths.login} component={Login} exact />
        <GuestRoute path={paths.register} component={Register} exact />
        <GuestRoute path={paths.message} component={Message} exact />
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

        {/* Doctor */}
        <DashRoute path={paths.doctor.patients} component={Patients} />

        {/* client */}
        <DashRoute path={paths.doctors} component={Doctors} />
        <DashRoute path={paths.patient.vitals} component={Vitals} />
        {/* <DashRoute path={paths.} component={Products} /> */}

        <DashRoute path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
