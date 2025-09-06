//JSX react
import ReactDOM from "react-dom/client";

// //React Element
// const jsxHeading = (<h1 id="heading" 
//     className= "test">
//         Namaste React with JSX</h1>);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//React component
const number = 100;
const Element1 = (
    <h1> Trying element inside component</h1>
)
const Title = () => (
    <div id="container">
        <h1>Namste react using JSX</h1>
        <h2>{number}</h2>
    </div>
);

const HeadingComponent = () => (
    <div>
        {Element1}
        <Title />
    <h1> Namaste React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);