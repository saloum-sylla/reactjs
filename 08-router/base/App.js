import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/a-propos">À propos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/a-propos" component={APropos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
