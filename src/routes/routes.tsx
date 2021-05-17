import React from "react";
import { Switch } from "react-router";
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
// import Messages from "../pages/patient/PatientMessages";
import Orders from "../pages/admin/Orders";
import HistoryAdmin from "../pages/admin/HistoryAdmin";
import MessagesAdmin from "../pages/admin/MessagesAdmin";
import Appointments from "../pages/patient/Appointments";
import PatientMessages from "../pages/patient/PatientMessages";
import PatientsHistory from "../pages/patient/PatientsHistory";
import PatientsOrders from "../pages/patient/PatientsOrders";
import PatientProducts from "../pages/patient/PatientProducts";
import About from "../pages/guests/About";
import RecordPolicy from "../pages/guests/RecordPolicy";
import PrivacyPolicy from "../pages/guests/PrivacyPolicy";
import TermsCondition from "../pages/guests/TermsCondition";
import CookiesPolicy from "../pages/guests/CookiesPolicy";

const Routes = () => {
  return (
    <>
      <Switch>
        {/* <GuestRoute path="/dummy/:id" component={Dummy} exact /> */}
        <GuestRoute path={paths.index} component={Index} exact />
        <GuestRoute path={paths.login} component={Login} exact />
        <GuestRoute path={paths.register} component={Register} exact />
        <GuestRoute path={paths.about} component={About} exact />
        <GuestRoute path={paths.recordpolicy} component={RecordPolicy} exact />
        <GuestRoute path={paths.privacypolicy} component={PrivacyPolicy} exact />
        <GuestRoute path={paths.termscondition} component={TermsCondition} exact />
        <GuestRoute path={paths.cookiespolicy} component={CookiesPolicy} exact />
        <GuestRoute path={paths.doctorshome} component={Doctorshome} exact />
        <GuestRoute path={paths.pharmacyhome} component={Pharmacyhome} exact />
        <GuestRoute path={paths.doctorview} component={DoctorView} exact />
        <GuestRoute path={paths.productview} component={ProductView} exact />
        <GuestRoute path={paths.cart} component={Cart} exact />
        <GuestRoute path={paths.footer} component={Footer} exact />
        {/* <DashRoute path={paths.dashboard} component={Dummy} /> */}

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
        <DashRoute path={paths.patient.appointments} component={Appointments} />
        <DashRoute path={paths.patient.messages} component={PatientMessages} />
        <DashRoute path={paths.patient.history} component={PatientsHistory} />
        <DashRoute path={paths.patient.orders} component={PatientsOrders} />
        <DashRoute path={paths.common.products} component={PatientProducts} />
        <DashRoute path={paths.common.cart} component={Cart} exact />
        <DashRoute path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
