import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
  return (
    <div id="toDoList">
      <label htmlFor="basic-input">
        <span className="text-monospace">Things to do:</span>
      </label>
      <div className="list-group">
        {props.messages.map((message, index) => {
          return (
            <ListItem
              message={message}
              key={index}
              editMessage={props.editMessage}
              deleteMessage={props.deleteMessage}
            />
          );
        })}
      </div>
    </div>
  );
}
