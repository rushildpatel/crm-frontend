import React, { useState } from "react";

import "./entry.style.css";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setformLoad] = useState("login");
  // console.log(typeof email); variable value of that state
  // console.log(typeof setEmail); setEmail is a function which is used to set the value for the email

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    // console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up all required values in the form!");
    }

    //TODO: call API to submit form data
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Fill up all required values in the form!");
    }

    //TODO: call API to submit Reset form data
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setformLoad(formType);
  };

  //entry-page bg-info
  return (
    <div>
      <div className="entry-page bg-info">
        <div className="jumbotron form-box">
          {formLoad === "login" && <LoginForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher} email={email} pass={password} />}
          {formLoad === "reset" && <ResetPassword handleOnChange={handleOnChange} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher} email={email} />}
        </div>
      </div>
    </div>
  );
};
