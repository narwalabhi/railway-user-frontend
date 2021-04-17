// import footer from "./components/common/footer";
import "./App.css";
import Header from "./components/common/header";
import FindTrain from "./components/findTrain";
import Admin from "./components/admin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import React, { useState } from "react";
import Booking from "./components/booking";

function App() {
  const [user, setUser] = useState({});

  const userState = (value) => {
    setUser(value);
  };

  return (
    <>
      <Header user={user} userState={userState} />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/find-train" component={FindTrain} />
        <Route
          path="/admin"
          render={() => {
            return <Admin user={user} />;
          }}
        />
        <Route
          exact
          path="/booking"
          render={() => {
            return <Booking user={user} />;
          }}
        />
      </Router>
    </>
  );
}

export default App;
