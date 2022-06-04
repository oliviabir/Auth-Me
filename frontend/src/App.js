import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Splash from "./components/Splash";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import CampusList from "./components/CampusesList";
import CampusDetailPage from "./components/CampusDetailPage"
import AddCampusForm from "./components/AddCampusForm";
import Profile from "./components/Profile";
import AddBookingForm from "./components/AddBookingForm";
import * as sessionActions from './store/session'
import { getBookings } from "./store/booking";
import { getCampusList } from "./store/campus"

function App() {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
  })

  // const campuses = useSelector(state => state.campuses)
  // const bookings = useSelector(state => state.bookings)

  // useEffect(() => {
  //   dispatch(getCampusList())
  //   dispatch(getBookings())
  // }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Splash />
          </Route>
          <Route path='/signup' exact>
            <SignupFormPage />
          </Route>
          <Route path='/profile' exact>
            <Profile />
          </Route>
          <Route path='/campus' exact>
            <CampusList />
          </Route>
          <Route path='/campus/new' exact>
            <AddCampusForm />
          </Route>
          <Route path='/campus/:campusId'>
            <CampusDetailPage />
          </Route>
          {/* <Route path='/bookings'>
            <AddBookingForm campuses={campuses} />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
