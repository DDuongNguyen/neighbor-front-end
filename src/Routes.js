import React from "react";
import { Switch, Route } from "react-router-dom";
import Entry from './entry';
import Main from './main';
import EventCalendar from './event-calendar';
import EventMap from './event-map';

const Routes = () => {
  return (
    <Switch>
      <Route path="/entry" component={Entry} />
      <Route path="/map" component={EventMap} />
      <Route path="/calendar" component={EventCalendar} />
      <Route path="/" component={Main} />
    </Switch>
  );
};

export default Routes;
