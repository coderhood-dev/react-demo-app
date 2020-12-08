import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Profile,
  Header,
  SignIn,
  SignUp,
  Layout,
  ProtectedRoute,
} from "./";
import { UserContext } from "../context/user";

export const App = () => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Router>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <ProtectedRoute
              path="/profile"
              isAuthenticated={!!user}
              component={
                <>
                  <Header />
                  <Profile />
                </>
              }
            ></ProtectedRoute>
            <ProtectedRoute
              path="/"
              exact
              isAuthenticated={!!user}
              component={
                <>
                  <Header />
                  <Home />
                </>
              }
            ></ProtectedRoute>
          </Switch>
        </Router>
      </Layout>
    </UserContext.Provider>
  );
};
