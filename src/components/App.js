import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile, Header, SignIn, SignUp } from "./";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
