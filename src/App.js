import React from "react";
import { createRoot } from "react-dom/client";
import Fruits from "./fruits";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "name"),
    React.createElement(Fruits, {
      name: "Apple",
      description: "an apple a day keeys Doctor away",
      price: "Why this is too expensive",
    }),

    React.createElement(Fruits, {
      name: "Orange",
      description: "This is to juicy",
      price: "I dont to have to purchase it ",
    }),

    React.createElement(Fruits, {
      name: "Gava",
      description: "This is the best thing that I have eaten here",
      price: "These are the one for me ",
    }),

    React.createElement(Fruits, {
      name: "onion",
      description: "This is not a fruit what is this doing here",
      price: "hell nah",
    }),
  ]);
};

const container = document.getElementById("root");
root.render(React.createElement(App));
