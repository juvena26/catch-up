import React from "react";
import Nala from "../../images/Nala.jpg";
import { IoCalendar, IoVideocam } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { IoListCircleOutline } from "react-icons/io5";
const ChatsNavbar = () => {
  return (
    <div className="c-toolbar">
      <div className="icon">
        <Link to="/">
          <BsChevronLeft />
        </Link>
        <Link className="only-mobile" to="/chatlist">
          {" "}
          <IoListCircleOutline />
        </Link>
      </div>
      <span className="menu-icons">
        <img src={Nala} alt="Nala" />
        <span className="profile-name">Nala</span>
      </span>

      <span className="menu-icons">
        <IoCalendar /> <IoVideocam /> <BiPhone /> <BsThreeDotsVertical />
      </span>
    </div>
  );
};
export default ChatsNavbar;
