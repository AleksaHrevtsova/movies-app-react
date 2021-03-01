import "./App.css";
import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import r from "./routes";
// console.log(r.mainRoutes);
const { mainRoutes: routes } = r;

class App extends Component {
  render() {
    // console.log(routes);
    return (
      <div className="App">
        <Header />
        <Suspense fallback="Loading...">
          <Switch>
            {routes.map((route, idx) => (
              <Route key={idx} {...route} />
            ))}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
