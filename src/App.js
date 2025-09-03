import React from "react";
import Header from "./Header";
import TODOItem from "./Item";
import Button from "./Button"; 
import "./todo.css";

const App = () => {
  return (
    <div className="container">
      <Header title ="Todoie-app"/>
      <TODOItem text ="Eat"/>
      <TODOItem text ="Code"/>
      <TODOItem text ="Game"/>
      <TODOItem text ="Study"/>
      <TODOItem text ="Exercise"/>
      <Button/>
    </div>
  );
}

export default App;

