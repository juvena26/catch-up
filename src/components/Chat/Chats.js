import React from "react";
import ChatsNavbar from "./ChatsNavbar";
import Input from "./Input";
import { MessageList } from "./MessagesList";

import { useState, useEffect } from "react";
const Chats = () => {
  const [texts, setTexts] = useState(() => {
    const localValue = localStorage.getItem("TEXT");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TEXT", JSON.stringify(texts));
  }, [texts]);

  function addText(title) {
    setTexts((currentTexts) => {
      return [...currentTexts, { id: crypto.randomUUID(), title }];
    });
  }

  return (
    <>
      <div class="chat-messages">
        <MessageList texts={texts} />

        <Input addText={addText} />
      </div>
    </>
  );
};
export default Chats;
