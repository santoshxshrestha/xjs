const Hello = () => {
  return React.createElement(
    "div", // here this is just name of the tag
    { class: "hello" }, // this just for set attribute
    React.createElement(
      // this is the place where you can put another tag or do what ever
      "div",
      { id: "inner div of the hello" },
      React.createElement(
        "p",
        { class: "this is para" },

        "some content inside the paragraph" //here I am putting teh content inside the paragraph tag
      )
    )
  );
};

const Fruits = (props) => {
  return React.createElement("div", { class: "fruit-list" }, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
    React.createElement("h3", {}, props.price),
  ]);
};

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
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
