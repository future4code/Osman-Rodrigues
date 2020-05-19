import React from "react"
import {Switch, Route, BrowserRouter} from "react-router-dom"

import HomePage from "./components/HomePage"

import "./AppMainStyles";

function App() {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage
          
          />
        </Route>

        <Route exact path="/login">
          <h1>Login</h1>
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
          <h1>Forms</h1>
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
