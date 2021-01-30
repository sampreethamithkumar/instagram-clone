import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import auth from "./services/authService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        {user && (
          <React.Fragment>
            <Header />
            <Switch>
              <main className="container">
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
              </main>
            </Switch>
            <NavBar />
          </React.Fragment>
        )}
        {!user && (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />
            <Redirect to="/login" />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

export default App;
