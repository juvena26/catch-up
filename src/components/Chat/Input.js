import React from "react";
import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";

const Input = ({ addText }) => {
  const [message, setMessage] = useState(" ");

  function handleSubmit(e) {
    e.preventDefault();
    if (message === " ") return;
    addText(message);

    setMessage(" ");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-box">
        <label htmlFor="newMessage"></label>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          id="newMessage"
          className="placeHolder"
        />

        <span className="input-icons">
          <AiOutlineCamera /> <AiOutlineLink /> <BiPhotoAlbum />
        </span>
        <button className="send-btn">Send</button>
      </form>
    </div>
  );
};
export default Input;
