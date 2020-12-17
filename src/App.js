import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNav from "./AppNav";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppNav} />
      </Switch>
    </Router>
  );
}

export default App;
