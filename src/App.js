import "./styles.css";
import React from "react";

var shoppingList = [
  "milk",
  "egg",
  "makhana",
  "nutrichoice biscuits",
  "dettol",
  "toothbrush",
  "microbio notes",
];

export default function App() {
  return (
    <div className="App">
      <h1>print my shopping list</h1>
      <ol>
        {shoppingList.map(function (item) {
          console.log(item);
          return <li>{item}</li>;
        })}
      </ol>
    </div>
  );
}
