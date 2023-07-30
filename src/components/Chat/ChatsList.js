import React from "react";
import Nala from "../../images/Nala.jpg";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
const ChatsList = () => {
  return (
    <>
      <span className="backtochat">
        {" "}
        <Link to="/chat">
          <BsChevronLeft />
        </Link>
        Back to Chat
      </span>
      {/* <div className="c-bg"> */}
      <div className="c-sidenav">
        <div className="c-list">
          <Link className="link-text" to="/chat">
            <div className="c-listitem">
              <div className="profile-info">
                <img className="list-pic" src={Nala} alt="" />
                <span className="list-name">Nala</span>
              </div>

              <div className="message-in-list">
                <span>Hey there!</span>
              </div>
            </div>
          </Link>
          <Link className="link-text" to="/chat">
            <div className="c-listitem">
              <div className="profile-info">
                <img className="list-pic" src={Nala} alt="" />
                <span className="list-name">Nala</span>
              </div>

              <div className="message-in-list">
                <span>Hey there!</span>
              </div>
            </div>
          </Link>
          <Link className="link-text" to="/chat">
            <div className="c-listitem">
              <div className="profile-info">
                <img className="list-pic" src={Nala} alt="" />
                <span className="list-name">Nala</span>
              </div>

              <div className="message-in-list">
                <span>Hey there!</span>
              </div>
            </div>
          </Link>
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
      {/* </div> */}
    </>
  );
};
export default ChatsList;
