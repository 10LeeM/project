import React, { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { sendReq } from "../../api/api";
import { User as IUser } from "../../models/user";
import { useLoading } from "../../utils/hooks";
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
    <>
      <div className="wrapper login-2">
        <div className="container1">
          <div className="col-left">
            <div className="login-form">
              <h2>Create Account</h2>
              <form
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
                <p>
                  <input
                    type="name"
                    id="name"
                    placeholder="Name"
                    required
                    onChange={onChange}
                  />
                </p>
                <p>
                  <input
                    type="email"
                    id="login"
                    placeholder="Email"
                    required
                    onChange={onChange}
                  />
                </p>
                <p>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={onChange}
                  />
                </p>

                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <input
                          className="button m-2"
                          id="client"
                          type="radio"
                          value="client"
                          checked={user?.role === "client"}
                          onClick={(e) => {
                            e.stopPropagation();
                            setUser({ ...user, role: "client" });
                          }}
                        />
                      </div>
                      <div className="col">Patient</div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <input
                          className="button m-2"
                          id="doctor"
                          type="radio"
                          value="doctor"
                          checked={user?.role === "doctor"}
                          onClick={(e) => {
                            e.stopPropagation();
                            setUser({ ...user, role: "doctor" });
                          }}
                        />
                      </div>
                      <div className="col">Doctor</div>
                    </div>
                  </div>
                </div>

                <div>
                  <button>Sign up</button>
                </div>

                <p>
                  <Link to="/login">Login</Link>
                </p>
                <p>
                  <Link to="/forget">Forget Password?</Link>
                </p>
              </form>
            </div>
          </div>

          <div className="col-right">
            <div className="login-social">
              <h2>Register with</h2>
              <Link to="#" className="btn btn-go">
                Google
              </Link>
              <Link to="#" className="btn btn-fb">
                Facebook
              </Link>
              <Link to="#" className="btn btn-tw">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
