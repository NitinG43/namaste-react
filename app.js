const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement(
            "h1",
            {},
            "I am h1 Tag"),
        React.createElement(
            "h2",
            {},
            "This is a h2 tag")
    ]),
    React.createElement(
        "div",
        {id:"child2"},[
        React.createElement(
            "h1",
            {},
            "This is h1 tag of 2nd child"),
        React.createElement(
            "h2",
            {},
            "This is the h2 tag of child 2")
    ])

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

