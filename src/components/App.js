import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile, SignIn, SignUp, Layout } from "./";
import { UserContext } from "../context/user";

export const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/profile">
              <>
                <Profile />
              </>
            </Route>
            <Route path="/" exact>
              <>
                <Home />
              </>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </UserContext.Provider>
  );
};
