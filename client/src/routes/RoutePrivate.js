import React from "react";
import { Route, Redirect } from "react-router-dom";
// higherOrderComponent
// https://es.reactjs.org/docs/higher-order-components.html

const RoutePrivate = ({ component: Component, ...props }) => {
  const autenticado = true;
  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RoutePrivate;
