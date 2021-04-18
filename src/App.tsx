import React from "react";
import "./App.css";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { isLoading } from "./store/slices/loadingSlice";
import { useQuery } from "react-query";
import { sendReq } from "./api/api";
import { Role, User } from "./models/user";
import { useLoading } from "./utils/hooks";
import { login, setRole } from "./store/slices/userSlice";
import AppLoader from "./components/common/AppLoader";

function App() {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  const { isLoading: fetchingProfile } = useQuery(
    "Get user profile",
    async () => {
      return (await sendReq({
        endpoint: "/users/profile",
        method: "GET",
        auth: true,
      })) as User;
    },
    {
      onSuccess: (data) => {
        let role: Role = localStorage.__role;
        if (role) {
          dispatch(setRole(role));
        }

        dispatch(login(data));
      },
      onError() {
        let role: Role = localStorage.__role;
        if (role === "pharmacy") {
          dispatch(setRole(role));
          dispatch(
            login({
              address: "",
              connectyCubeID: "",
              cost: 0,
              created: "",
              email: "",
              fullName: "",
              height: "",
              id: "4567",
              licence: "",
              location: "",
              login: "",
              name: "",
              nextOfKin: "",
              password: "",
              phoneNumber: "",
              photo: "",
              role: "pharmacy",
              speciality: "",
              status: "approved",
              userId: "",
              weight: "",
            })
          );
        }
      },
      retry: false,
    }
  );

  useLoading(fetchingProfile);

  return (
    <div className="App">
      {loading && <AppLoader />}
      <ToastContainer position="top-right" hideProgressBar={true} />
      <Routes />
    </div>
  );
}

export default App;
