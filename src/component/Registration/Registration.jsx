import React from "react";
import RegistrationForm from "./RegistrationForm";
import BackToLogin from "./BackToLogin";

const Registration = () => {
  return (
    <React.Fragment>
      <section className="login_register-container">
        <div className="login_register">
          <h1 className="text--align-center">Instagram</h1>
          <RegistrationForm />
        </div>
        <BackToLogin />
      </section>
    </React.Fragment>
  );
};

export default Registration;
