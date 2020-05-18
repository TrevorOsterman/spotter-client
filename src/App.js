import React from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
