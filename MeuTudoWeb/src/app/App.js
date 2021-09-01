import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./common/components/Header";
import routes from "./common/constants/routes";
import moment from 'moment'

moment.locale(navigator.language)

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} component={route.component}/>
        })}
      </Switch>
    </div>
  );
};

export default App;