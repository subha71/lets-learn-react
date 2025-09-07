we can start by writing a script in package.json and we can run npm start or npm run start
React.createElement -> creates an object and when it renders to DOM then it becomes a html element.


**Initial code:-**
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id: "heading"}, "Hello Created my first react code") //{} is for giving attributes to a class
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading) //render take on object and convert to tag and also replace is already anything

to Add nested elements
const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"},
    React.createElement("h1", {id: "heading"}, "Tried nested elements")
))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


to Add siblings put it in array
const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"},
    [React.createElement("h1", {id: "heading", key: "h1"}, "Tried nested elements"),
        React.createElement("h2", {id: "heading2", key: "h2"}, "Tried sibbling")]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

**JSX**
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files. 
JSX is html like syntax its not html in javascript.
transpiled before it reaches to react engine(it makes understandable by JS) and this transpiling is done by babel package in parcel so basically jsx code transpiled to React.createElement
for multiple lines wrap in bracket:-
const jsxHeading = (<h1 id="heading" className= "test">
Namaste React with JSX
</h1>);

**components**
two types of components:- class based component, functional component(it is used now and this is new)
functional comp:- normal javascrpt which return JSX, and we can write using normal function or arrow function
const HeadingComponent = () => {
    return <h1> Namaste React functional component</h1>
}

Component Composition(component inside component and also wrote element under composition):-
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
we can also call functional component like this {Title()}

we should always pass a key in props if you dont pass react re-renders everything from the start  and all key should be unique

import {CDN_URL_1, CDN_URL_2} from "../utils/constants" #to impoort variables
for every import export is neded