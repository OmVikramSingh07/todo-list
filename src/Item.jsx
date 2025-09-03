import React from "react";
 const TODOItem = () => {
    return(
        <li className="todo-item">
          <span className="todo-span">
            <input type="checkbox"/>
            <span className="todo-item-text">Eat</span>
           </span>
          <span className="todo-span">
            <input type="checkbox"/>
            <span className="todo-item-text">Code</span>
           </span>
          <span className="todo-span">
            <input type="checkbox"/>
            <span className="todo-item-text">Game</span>
           </span>
          <span className="todo-span">
            <input type="checkbox"/>
            <span className="todo-item-text">Reading</span>
           </span>
          <span className="todo-span">
            <input type="checkbox"/>
            <span className="todo-item-text">Exercise</span>
           </span>
           
        </li>
    )
 }

 export default TODOItem;