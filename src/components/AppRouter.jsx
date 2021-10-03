import {routes} from "../router/router";
import {Redirect, Route, Switch} from "react-router-dom";

export const AppRouter = () => {
  return (
    <Switch>
      {routes.map((rote) =>
        <Route key={rote.path} component={rote.component} path={rote.path}  exact={rote.exact}/>)}
      <Redirect to='/all'/>
    </Switch>
  );
};
