import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute({ role, authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        // 권한 체크
        if (role !== "ROLE_DOCTOR") {
          return <Page403 />
        }

        if (Component) {
          // role을 컴포넌트에 전달
          return <Component {...props} role={role} />
        }

        return null
      }}
    />
  );
}

export default AuthRoute;