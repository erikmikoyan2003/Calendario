import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

// import { checkAccess } from "./api/access.js";

import Header from "./components/Header/Header.jsx";

import Auth from "./pages/Auth/Auth.jsx";
import Calendar from "./pages/Calendar/Calendar.jsx";

// TODO
function AnalRouter() {
  // TODO получение из локалсторадж токена сессии. Проверка токена.
  // Определение, чей это токен.
  let isLoged = false;

  // useEffect(async () => {
  //   const sessionId = localStorage.getItem("sessionId");

  //   if (sessionId) {
  //     isLoged = await checkAccess(sessionId);
  //   }
  // });

  return (
    <div>
      <Auth/>
      {JSON.stringify(isLoged)}
    </div>
  );
}

ReactDOM.render(<AnalRouter />, document.getElementById("root"));

// <Router>
//   <Header />
//   <Switch>
//     <Route exact path="/calendar" component={Calendar} />
//     <Route path="/auth" component={Auth} />
//     <Route path="/overview" component={Calendar} />
//     <Route path="/tasks" component={Calendar} />
//     <Route path="/tracker" component={Calendar} />

//     <Redirect from="/" to="/calendar" />
//   </Switch>
// </Router>
