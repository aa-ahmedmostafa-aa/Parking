import React from "react";
import styles from "./styles.module.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Dashboard, Departments, MoneyCollection, PricePlan, Search, Tickets, Users } from "..";

export default function index() {
  return (
    <div className={`${styles.content} vh-100`}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/departments" component={Departments} />
        <Route path="/moneyCollection" component={MoneyCollection} />
        <Route path="/pricePlan" component={PricePlan} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/users" component={Users} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}
