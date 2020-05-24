import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import HomePage from "./components/HomePage";
import ApplyFormsPage from "./components/ApplyFormsPage";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import CreateTripPage from "./components/CreateTripPage";
import MyTripsPage from "./components/MyTripsPage";
import ApplicantsPage from "./components/ApplicantsPage";

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

        <Route exact path="/admin/:userCredentials">
          <AdminPage
            AdminKey = {adminKey}
          />
        </Route>

        <Route exact path="/admin/:userId/myTrips/:userToken">
          <MyTripsPage
            AdminKey={adminKey}
          />
        </Route>

        <Route exact path="/admin/:userId/createTrip/:userToken">
          <CreateTripPage
            AdminKey = {adminKey}
          />
        </Route>

        <Route exact path="/admin/:userId/applicants/:userToken">
          <ApplicantsPage
            AdminKey = {adminKey}
          />
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
