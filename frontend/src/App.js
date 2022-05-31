import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import CampusList from "./components/CampusesList";
import CampusDetailPage from "./components/CampusDetailPage"
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
          <Route path='/campus' exact>
            <CampusList />
          </Route>
          <Route path='/campus/:campusId'>
            <CampusDetailPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
