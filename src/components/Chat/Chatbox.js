import React from "react";
import Input from "./Input";

import { useState, useEffect } from "react";

import ChatsList from "./ChatsList";
import ChatsNavbar from "./ChatsNavbar";
const Chatbox = () => {
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
    <div className="chats-tab">
      <div className="chat-wrapper">
        <ChatsNavbar />
        <div className="c-container">
          <span className="c-sidenav-toggle">
            <ChatsList />
          </span>
          <div className="c-chat">
            {texts.length === 0 && "No messages"}
            {texts.map((text) => {
              return (
                <div className="c-msg">
                  <p key={text.id}>
                    <label className="c-msg-bg">{text.title}</label>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="c-input">
          <Input addText={addText} />
        </div>
      </div>
    </div>
  );
};
export default Chatbox;
