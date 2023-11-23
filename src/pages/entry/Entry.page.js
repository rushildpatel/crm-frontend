import React from "react";
import "./entry.style.css";
import { LoginForm } from "../../components/login/Login.comp";

export const Entry = () => {
  return (
    <div>
      <div className="jumbotron">
        {" "}
        <LoginForm />{" "}
      </div>
    </div>
  );
};
