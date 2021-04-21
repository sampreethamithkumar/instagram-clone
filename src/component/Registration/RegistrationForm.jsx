import React from "react";
import Joi from "joi-browser";
import Form from "./../Common/Form";
import { register } from "./../../services/registerService";
import auth from "./../../services/authService";

class RegistrationForm extends Form {
  state = {
    data: {
      email: "",
      fullname: "",
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    fullname: Joi.string().required(),
    username: Joi.string().required(),
  });

  doSubmit = async () => {
    try {
      await register(this.state.data);
      await auth.login(this.state.data.email, this.state.data.password);

      window.location.reload(false);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email Id")}
          {this.renderInput("fullname", "Fullname")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;
