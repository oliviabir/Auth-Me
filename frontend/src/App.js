import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from './store/session'
import SignupFormPage from "./components/SignUpFormPage";

function App() {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
  })

  return isLoaded && (
    <Switch>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
      <Route path='/signup'>
        <SignupFormPage />
      </Route>
    </Switch>
  );
}

export default App;
