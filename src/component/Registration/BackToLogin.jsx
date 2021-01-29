import React from "react";
import { Link } from "react-router-dom";

const BackToLogin = () => {
  return (
    <div className="signup_back">
      <p className="text--align-center">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default BackToLogin;
