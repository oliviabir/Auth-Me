import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import CampusPage from "./components/CampusPage"
import * as sessionActions from './store/session'

function App() {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
  })

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/campus/:id'>
            <CampusPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
