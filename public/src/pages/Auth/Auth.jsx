import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import user from "../../api/user";

export default class Auth extends React.Component{
  // const handleSubmit = (e) => {
  //   console.log(e)
  //   e.preventDefault();
  //   user.create(formFields.login, formFields.password);
  // };
  componentDidMount() {
    document.forms.authorization.addEventListener("onSubmit", (e) => {
      console.log(e)
    })
  }

  render() {
    return (
    <div>
      <form name="authorization">
        <input name="login" placeholder="login" />
        <input name="password" placeholder="password" />
        <input name="submit" value="Отправить" type="submit" />
      </form>
    </div>
  );
  }
  
}
