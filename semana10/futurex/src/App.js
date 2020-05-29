import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import './AppStyles.css'

import HomePage from "./components/HomePage";
import ApplyFormsPage from "./components/ApplyFormsPage";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import CreateTripPage from "./components/CreateTripPage";
import MyTripsPage from "./components/MyTripsPage";
import ApplicantsPage from "./components/ApplicantsPage";

function App() {

  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/osman";

  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/">
          <HomePage
            
          />
        </Route>

        <Route exact path="/login">
          <LoginPage
            BaseUrl={baseUrl}
          />
        </Route>

        <Route exact path="/admin/:userId">
          <AdminPage
            BaseUrl={baseUrl}
          />
        </Route>

        <Route exact path="/admin/:userId/createTrip">
          <CreateTripPage
            BaseUrl={baseUrl}
          />
        </Route>

        <Route exact path="/admin/:userId/myTrips">
          <MyTripsPage
            BaseUrl={baseUrl}
          />
        </Route>

        <Route exact path="/admin/:userId/applicants">
          <ApplicantsPage
            BaseUrl={baseUrl}
          />
        </Route>

        <Route exact path="/applicationForm">
          <ApplyFormsPage
            BaseUrl={baseUrl}
          />
        </Route>

        <Route path="/">
          <p>Erro 404</p>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
