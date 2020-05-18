import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import ParkList from "./ParkList/ParkList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spots: [
        {
          name: "The Wedge",
          location: "1764 N 77th St",
          city: "Scottsdale",
          state: "AZ",
          zip: "85257",
          overall: 4,
          streetRating: 3,
          transRating: 5,
          size: 4,
          vibe: 5,
          gate: false,
          lights: true,
        },
        {
          name: "Pecos Park",
          location: "17010 S 48th St",
          city: "Phoenix",
          state: "AZ",
          zip: "85048",
          overall: 4,
          streetRating: 4,
          transRating: 5,
          size: 5,
          vibe: 4,
          gate: true,
          lights: true,
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />

        <Route exact path="/" component={ParkList} />
      </div>
    );
  }
}

export default App;
