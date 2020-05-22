import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import HomePage from "./components/HomePage";
import ApplyFormsPage from "./components/ApplyFormsPage";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage"

import "./AppMainStyles";


function App() {

  const adminKey = 'osman'

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <HomePage
          
          />
        </Route>

        <Route exact path="/login">
          <LoginPage
            AdminKey={adminKey}
          />
        </Route>

        <Route exact path="/admin/:userCredentials">
          <AdminPage
            AdminKey = {adminKey}
          />
        </Route>

        <Route exact path="/admin/:userId/trips">
          <h1>Trips</h1>
        </Route>

        <Route exact path="/admin/:userId/create-trip">
          <h1>Create trip</h1>
        </Route>

        <Route exact path="/admin/:userId/applicants">
          <h1>Applicants</h1>
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
