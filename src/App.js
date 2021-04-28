// import footer from "./components/common/footer";
import "./App.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import FindTrain from "./components/findTrain";
import Admin from "./components/admin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import React, { useState } from "react";
import { SearchResult } from "./components/SearchResult";
import { SearchItem } from "./components/SearchItem";
import  BookingStepper  from "./components/BookingStepper";


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
          path="/book"
          render={() => {
            return <BookingStepper user={user} />;
          }}
        />
        <Route
          exact
          path="/search-result"
          render={() => {
            return <SearchResult user={user} />;
          }}
        />
        <Route
          exact
          path="/search-item"
          render={() => {
            return <SearchItem user={user} />;
          }}
        />
      </Router>
      <Footer />
    </>
  );
}

export default App;
