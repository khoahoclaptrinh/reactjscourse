import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./containers/layouts/Main";
import Admin from "./containers/layouts/Admin";
import Home from "./containers/Main/Home/Home";
import About from "./containers/Main/About/About";
import Post from "./containers/Main/Post/Post";
import Register from "./containers/Main/User/Register";
import Dashboard from "./containers/Admin/Dashboard/Dashboard";
import { Post as AdminPost } from "./containers/Admin/Post/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?" exact>
          <Admin>
            <Switch>
              <Route path="/admin" exact component={Dashboard} />
              <Route path="/admin/post" component={AdminPost} />
            </Switch>
          </Admin>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/post" component={Post} />
              <Route path="/register" component={Register} />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
