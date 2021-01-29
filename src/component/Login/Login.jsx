import React from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

const Login = () => {
  return (
    <React.Fragment>
      <section className="login_register-container">
        <div className="login_register">
          <h1 className="text--align-center">Instagram</h1>
          <LoginForm />
        </div>
        <SignUp />
      </section>
    </React.Fragment>
  );
};

export default Login;
