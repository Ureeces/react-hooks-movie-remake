import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNav from "./AppNav";
import Movie from "./components/Movie/Movie";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppNav} />
        <Router path="/:movieTitle" component={Movie} />
        <Router render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
