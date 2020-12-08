import { Route, Redirect } from "react-router-dom";

// import { useHistory } from "react-router-dom";
// import { UserContext } from "../context/user";

export const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component />;
        } else {
          <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
};
