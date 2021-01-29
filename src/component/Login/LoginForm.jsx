import React from "react";
import Joi from "joi-browser";
import Form from "./../Common/Form";
import { login } from "./../../services/authService";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.email, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email Id")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
