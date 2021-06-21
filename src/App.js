import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Search from "./components/Search";
import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Message from "./components/Message";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Id") !== null) {
      setIsAuthorized(true);
    }
  }, []);
  return (
    <>
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                isAuthorized={isAuthorized}
                setIsAuthorized={setIsAuthorized}
              />
            )}
          />
          <Route path="/search" exact component={Search} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/message" exact component={Message} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
