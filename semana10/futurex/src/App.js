import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import HomePage from "./components/HomePage";
import ApplyFormsPage from "./components/ApplyFormsPage";
import LoginPage from "./components/LoginPage"

import "./AppMainStyles";


function App() {

  const adminKey = 'osman'

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage
          
          />
        </Route>

        <Route exact path="/login">
          <LoginPage
            AdminKey={adminKey}
          />
        </Route>

        <Route exact path="/admin">

        </Route>

        <Route exact path="/trips">

        </Route>

        <Route exact path="/create-trip">

        </Route>

        <Route exact path="/applicants">

        </Route>

        <Route exact path="/application-form">
          <ApplyFormsPage
            AdminKey={adminKey}
          />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
