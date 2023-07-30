import React from "react";

export function Messages({ texts }) {
  return (
    <ul>
      {texts.length === 0 && "No messages"}
      {texts.map((text) => {
        return (
          <li key={text.id}>
            <label>{text.title}</label>
          </li>
        );
      })}
    </ul>
  );
}
