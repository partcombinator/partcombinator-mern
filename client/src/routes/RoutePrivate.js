import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// higherOrderComponent
// https://es.reactjs.org/docs/higher-order-components.html

const RoutePrivate = ({ component: Component, ...props }) => {
  // Todo: Private URL
  // const token = useSelector((state) => state.users.token);
  const autenticado = true;
  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado ? <Redirect to="/signin" /> : <Component {...props} />
      }
    />
  );
};

export default RoutePrivate;
