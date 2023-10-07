import {
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useLogin } from "../api/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const {
    mutate: login,
    data: loginData,
    isError: loginErr,
    isSuccess: loginSuccess,
  } = useLogin();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onLogin = (data) => {
    console.log(data);
    const { email, password } = data;
    if (!!email && !!password) {
      login({ email, password });
    }
  };
  useEffect(() => {
    if (loginErr) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (loginSuccess) {
      toast.success("Logged in Success", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("token", loginData?.access_token);
      navigate("/profile");
    }
  }, [loginErr, loginSuccess]);

  console.log(loginData);

  return (
    <MDBContainer fluid className="mt-5">
      <section>
        <MDBRow className="justify-content-center">
          <MDBCol lg="6">
            <form onSubmit={handleSubmit(onLogin)}>
              <MDBInput
                className="mb-4"
                type="email"
                name="email"
                id="loginName"
                label="Email or username"
                {...register("email")}
              />

              <MDBInput
                className="mb-4"
                type="password"
                id="loginPassword"
                label="Password"
                name="password"
                {...register("password")}
              />

              <MDBRow className="mb-4">
                <MDBCol md="6" className="d-flex justify-content-center">
                  <MDBCheckbox
                    className=" mb-3 mb-md-0"
                    defaultChecked
                    label=" Remember me"
                  />
                </MDBCol>

                <MDBCol md="6" className="d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </MDBCol>
              </MDBRow>

              <MDBBtn type="submit" onClick={onLogin} block className="mb-4">
                Sign in
              </MDBBtn>

              <div className="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
                <p>or sign up with:</p>
                <MDBBtn color="link" type="button" floating className="mx-1">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn color="link" type="button" floating className="mx-1">
                  <MDBIcon fab icon="google" />
                </MDBBtn>

                <MDBBtn color="link" type="button" floating className="mx-1">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn color="link" type="button" floating className="mx-1">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default App;
