import React, { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { sendReq } from "../../api/api";
// import { User as IUser } from "../../models/user";
import { useLoading } from "../../utils/hooks";
import Footer from "../guests/Footer";
import "./login.css";

type User = {
  login?: string;
  password?: string;
  role?: "client" | "doctor" | "admin";
  name?: string;
};

const Register = () => {
  const [user, setUser] = useState<User>();

  const { isLoading, mutate: registerUser } = useMutation(
    (data: User) => {
      return sendReq({
        endpoint: "/users",
        method: "POST",
        body: data,
      });
    },
    {
      onSuccess: (data) => {
        toast(`Registration successfull`, { type: "success" });
      },
      onError: (err) => {
        toast(`${err}`, { type: "error" });
      },
    }
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  useLoading(isLoading);

  return (
    <div>
      <div className="account-pag">
        <div className="contained">
          <div className="row">
            <div className="col-2">
              <img src="image/home.png" width="100%" alt="" />
            </div>
            <div className="col-2">
              <div className="form-contained">
                <div className="form-btn">
                  <span>Register</span>
                </div>

                <form
                  id="FormReg"
                  noValidate
                  onSubmit={(e) => {
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
                    if (user.password.length < 6) {
                      return toast(`Password should be 6+ characters`, {
                        type: "error",
                      });
                    }
                    if (!user?.name?.trim()) {
                      return toast(`Name is required`, { type: "error" });
                    }
                    if (!user?.role?.trim()) {
                      return toast(`Role is required`, { type: "error" });
                    }
                    registerUser(user!);
                  }}
                >
                  <input
                    type="name"
                    id="name"
                    placeholder="Name"
                    required
                    onChange={onChange}
                  />
                  <input
                    type="email"
                    id="login"
                    placeholder="Email"
                    required
                    onChange={onChange}
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={onChange}
                  />

                  <div className="contain">
                    <label>
                      Doctor
                      <input
                        id="doctor"
                        type="radio"
                        value="doctor"
                        checked={user?.role === "doctor"}
                        onClick={(e) => {
                          e.stopPropagation();
                          setUser({ ...user, role: "doctor" });
                        }}
                      />
                      <span className="checkmark" />
                    </label>
                    <label>
                      Patient
                      <input
                        id="client"
                        type="radio"
                        value="client"
                        checked={user?.role === "client"}
                        onClick={(e) => {
                          e.stopPropagation();
                          setUser({ ...user, role: "client" });
                        }}
                      />
                      <span className="checkmark" />
                    </label>{" "}
                  </div>

                  <button type="submit" className="btn" onClick={() => {}}>
                    Register
                  </button>
                  <a href="/login" className="btn">
                    {" "}
                    Login
                  </a>

                  <a href="/">Forgot password</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
