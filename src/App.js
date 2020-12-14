import React from "react";
import Layout from "./Components/Layout/Layout";
import MainPage from "./Containers/MainPage/MainPage";
import ResidentialPage from "./Containers/ResidentialPage/ResidentialPage";
import FullPage from "./Containers/FullPage/FullPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/residential" component={ResidentialPage} />
          <Route path="/:id" component={FullPage} />

          <Route path="/" exact component={MainPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
