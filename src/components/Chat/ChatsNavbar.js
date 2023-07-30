import React from "react";
import Nala from "../../images/Nala.jpg";
import { IoCalendar, IoVideocam } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const ChatsNavbar = () => {
  return (
    <div className="c-toolbar">
      <div className="input-icons">
        <div className="icon-mobile">
          <Link to="/chatlist">
            <BsChevronLeft />
          </Link>
        </div>
      </div>

      <span className="menu-icons">
        <img src={Nala} alt="" />
        <span className="profile-name">Nala</span>
      </span>

      <span className="menu-icons">
        <IoCalendar /> <IoVideocam /> <BiPhone /> <BsThreeDotsVertical />
      </span>
    </div>
  );
};
export default ChatsNavbar;
