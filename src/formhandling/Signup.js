import React, { Component } from "react";
import FormValidator from "./FormValidator";
class Signup extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "full_name",
        method: "isEmpty",
        validWhen: false,
        message: "Enter full name.",
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your email address.",
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Enter valid email address.",
      },
      {
        field: "phone",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a phone number.",
      },
      {
        field: "phone",
        method: "matches",
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: "Enter valid phone number.",
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Enter password.",
      },
      {
        field: "password_confirmation",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Password confirmation.",
      },
      {
        field: "password_confirmation",
        method: this.passwordMatch, // notice that we are passing a custom function here
        validWhen: true,
        message: "Password and password confirmation do not match.",
      },
    ]);
    this.state = {
      full_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      validation: this.validator.valid(),
    };
    this.submitted = false;
  }
  passwordMatch = (confirmation, state) => state.password === confirmation;
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation,
    });
    this.submitted = true;
    if (validation.isValid) {
      //reaches here if form validates successfully...
    }
  };
  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-4 ">
            <form className="registrationForm">
              <h2>100% valid form with validator</h2>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="string"
                  className="form-control mt-2"
                  name="full_name"
                  placeholder="Full Name"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block text-danger">
                  {validation.full_name.message}
                </span>{" "}
              </div>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  name="email"
                  placeholder="Email address"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block text-danger">
                  {validation.email.message}
                </span>{" "}
              </div>
              <div className={validation.phone.isInvalid && "has-error"}>
                <label htmlFor="phone">Phone(enter only 10 digit number)</label>
                <input
                  type="phone"
                  className="form-control mt-2"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block text-danger">
                  {validation.phone.message}
                </span>{" "}
              </div>
              <div className={validation.password.isInvalid && "has-error"}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block text-danger">
                  {validation.password.message}
                </span>{" "}
              </div>
              <div
                className={
                  validation.password_confirmation.isInvalid && "has-error"
                }
              >
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block text-danger">
                  {validation.password_confirmation.message}
                </span>{" "}
              </div>
              <button
                onClick={this.handleFormSubmit}
                className="btn btn-primary mt-2"
              >
                {" "}
                Register{" "}
              </button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}
export default Signup;
