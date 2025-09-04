import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {id: "heading"}, "Hello Created my first react code") //{} is for giving attributes to a class
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading) //render take on object and convert to tag and also replace is already anything

// to Add nested elements
// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"},
//     React.createElement("h1", {id: "heading"}, "Tried nested elements")
// ))
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)


//to Add siblings put it in array
const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"},
    [React.createElement("h1", {id: "heading", key: "h1"}, "Tried nested elements"),
        React.createElement("h2", {id: "heading2", key: "h2"}, "Tried sibbling")]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)