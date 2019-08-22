import React from "react";
import { Switch, Route } from "react-router-dom";
import Entry from './entry';
import Main from './main';
import EventCalendar from './event-calendar';
import EventMap from './event-map';
import Profile from './profile';
import SignUp from './entry/sign-up.js';
import SignIn from './entry/sign-in.js';

const Routes = () => {
  return (
    <Switch>
      <Route path="/entry" component={Entry} />
      <Route path="/map" component={EventMap} />
      <Route path="/calendar" component={EventCalendar} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
