import React from "react";
import Nala from "../../images/Nala.jpg";
import { Link } from "react-router-dom";

import { BsChevronLeft } from "react-icons/bs";
const ChatsList = () => {
  return (
    <div className="bg-on-mobile">
      <div className="c-sidenav">
        <div className="icon-on-mobile">
          <Link to="/chats">
            {" "}
            <BsChevronLeft />
          </Link>
          <span>Back to Chat</span>
        </div>
        <div className="c-list">
          <div className="c-listitem">
            <div className="profile-info">
              <img className="list-pic" src={Nala} alt="" />
              <span className="list-name">Nala</span>
            </div>

            <div className="message-in-list">
              <span>Hey there!</span>
            </div>
          </div>

          <div className="c-listitem">
            <div className="profile-info">
              <img className="list-pic" src={Nala} alt="" />
              <span className="list-name">Nala</span>
            </div>

            <div className="message-in-list">
              <span>Hey there!</span>
            </div>
          </div>
          <div className="c-listitem">
            <div className="profile-info">
              <img className="list-pic" src={Nala} alt="" />
              <span className="list-name">Nala</span>
            </div>

            <div className="message-in-list">
              <span>Hey there!</span>
            </div>
          </div>
          <div className="c-listitem">
            <div className="profile-info">
              <img className="list-pic" src={Nala} alt="" />
              <span className="list-name">Nala</span>
            </div>

            <div className="message-in-list">
              <span>Hey there!</span>
            </div>
          </div>
          <div className="c-listitem">
            <div className="profile-info">
              <img className="list-pic" src={Nala} alt="" />
              <span className="list-name">Nala</span>
            </div>

            <div className="message-in-list">
              <span>Hey there!</span>
            </div>
          </div>
          <div className="c-listitem">
            <div className="profile-info">
              <img className="list-pic" src={Nala} alt="" />
              <span className="list-name">Nala</span>
            </div>

            <div className="message-in-list">
              <span>Hey there!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatsList;
