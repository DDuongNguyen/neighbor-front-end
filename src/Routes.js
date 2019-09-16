import React from "react";
import { Switch, Route } from "react-router-dom";
import Entry from './entry';
import Main from './main';
import EventCalendar from './event-calendar';
import EventMap from './event-map';
import Profile from './profile';
import SignUp from './entry/sign-up.js';
import SignIn from './entry/sign-in.js';
import F404 from './entry/404.js';
import About from './entry/welcome.js';

const Routes = () => {
  return (
    <Switch>
      <Route path="/entry" component={Entry} />
      <Route path="/map" component={EventMap} />
      <Route path="/calendar" component={EventCalendar} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/404" component={F404} />
      <Route path="/about" component={About} />
      <Route path="/" component={F404} />
    </Switch>
  );
};

export default Routes;
