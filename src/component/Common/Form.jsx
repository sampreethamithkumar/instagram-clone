import React, { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
  };

  renderButton(label) {
    return <button className="btn btn--primary">{label}</button>;
  }

  renderInput(name, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
