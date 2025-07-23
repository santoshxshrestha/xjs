// const Fruits = (props) => {
//   return React.createElement("div", { class: "fruit-list" }, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//     React.createElement("h3", {}, props.price),
//   ]);
// };

const Fruits = (props) => {
    return (
        <div>
        <h1>
        {props.name}
        </h1>
        <p>
        {props.description}
        </p>
        </div>
    )
}
export default Fruits;
