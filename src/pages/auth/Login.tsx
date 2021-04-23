import React, { ChangeEvent, FormEvent, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { sendReq } from "../../api/api";
import { IDoctor, IPatient, Role, User as IUser } from "../../models/user";
import { login, setRole } from "../../store/slices/userSlice";
import { useLoading } from "../../utils/hooks";
import Footer from "../guests/Footer";
import "./login.css";

type User = {
  login?: string;
  password?: string;
};

const Login = () => {
  const [user, setUser] = useState<User>();
  const [role, setUserRole] = useState<Role>();
  const dispatch = useDispatch();

  const onError = (err: string) => {
    toast(err, { type: "error" });
  };

  const { isLoading, mutate: loginUser } = useMutation(
    async (data: User) => {
      return sendReq<{
        token?: string;
        role?: Role;
      }>({
        endpoint: "/users/login",
        method: "POST",
        body: user,
      });
    },
    {
      onError,
      onSuccess: (data) => {
        if (data.token && data.role) {
          localStorage.setItem("__ohospital", data.token);
          localStorage.setItem("__role", data.role);

          if (data.role === "pharmacy") {
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
          } else setUserRole(data.role);
        }
      },
    }
  );

  const { isLoading: logginIn } = useQuery(
    "login user",
    () => {
      return sendReq<IPatient | IDoctor | IUser>({
        endpoint: "/users/profile",
        method: "GET",
        auth: true,
      });
    },
    {
      onError,
      enabled: role !== undefined,
      onSuccess: (data) => {
        if (role) dispatch(setRole(role));
        dispatch(login(data));

        toast("Login successful", { type: "success" });
      },
    }
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    e.preventDefault();
    let pat = /^\S+@\S+\.\S+/i;

    if (!user?.login?.trim()) {
      return toast(`Email is required`, { type: "error" });
    }

    if (!user.login.match(pat)) {
      return toast(`Email is invalid`, { type: "error" });
    }
    if (!user?.password?.trim()) {
      return toast(`Password is required`, { type: "error" });
    }

    loginUser(user!);
  };

  useLoading(isLoading, logginIn);

  return (

    <div>


    <div className="account-page">
    <div className="container">
        <div className="row">
            <div className="col-2">
            <img src="image/home.png" width="100%" alt="" />
            </div>
            <div className="col-2">
                <div className="form-container">
                    <div className="form-btn">
                        <span>Login</span>
                     
                    </div>
                    <form id="FormLogin" noValidate onSubmit={onSubmit}>
                      <input 
                      id="login"
                      type="email"
                       placeholder="Email"
                      required
                       onChange={onChange}/>

                      <input type="password" placeholder="Password"
                       id="password"
                       required
                       onChange={onChange}
                      />
                      <button type="submit" className="btn"
                      onClick={() => {}}
                      >Login</button>
               
                      <a href="/register"  className="btn">   Register</a>
                      <a href="/" >Forgot password</a>
                    </form>

                  

                </div>
           
            </div>
        </div>

    </div>
  
</div>

<Footer/>
   </div>
  );
};

export default Login;
