import React from "react";
import ReactDOM from "react-dom/client";


// JSX - it is not html in JS, it is HTML like but not HTML.
const jsxHeading =(
  <h1 className="head" tabIndex="1">
  Namaste React usingJSX 🚀
  </h1>
  );
console.log(jsxHeading);

const JsxHeading = ()=> (
  <h1 className="head" tabIndex="1">
  Namaste React  🚀
  </h1>
  );

// React Components

   // Class Based Components- old way
   // Functional component- New Way => just a normal JS function

const HeadingComponent= ()=>{
  return <div className="container">
     <JsxHeading />
     {jsxHeading}
     <h1 className="heading">Namaste React Functional Comp. 🥳</h1>
  </div>;
};
//or
const HeadingComponent2= ()=> <h1 className="heading">Namaste React Functional Comp. 2</h1>;







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


