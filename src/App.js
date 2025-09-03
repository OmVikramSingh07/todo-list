import React from "react";
import Header from "./Header";
import TODOItem from "./Item";
import Button from "./Button"; 
import "./todo.css";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <TODOItem/>
     
      <Button/>
    </div>
  );
}

export default App;

