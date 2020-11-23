import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile, Header } from "./";

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};
