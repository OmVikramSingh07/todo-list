import React from "react";
 const TODOItem = (props) => {
    return(
        <li className="todo-item">
          <span>
            <input type="checkbox"/>
            <span className="todo-item-text">{props.text}</span>
           </span>
            <p>...</p>

        </li>
    )
 }

 export default TODOItem;