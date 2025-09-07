//JSX react
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import RestraurantCard from "./components/RestraurantCard"
import Body from "./components/Body"

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);