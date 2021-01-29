import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup_back">
      <p className="text--align-center">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default SignUp;
