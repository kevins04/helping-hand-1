import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withRoot from "./withRoot";
import Loader from "Components/Loader";

const Login = lazy(() => import("Views/Login/Login"));
const AppBar = lazy(() => import("Views/HomePage/AppBar"));
const ProductHero = lazy(() => import("Views/HomePage/ProductHero"));
const Signup = lazy(() => import("Views/Login/Signup"));
const ProductExperiences = lazy(() =>
  import("Views/HomePage/ProductExperiences")
);
const AppFooter = lazy(() => import("Views/HomePage/AppFooter"));

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <AppBar />
              <ProductHero />
              <ProductExperiences />
              <AppFooter />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default withRoot(App);
