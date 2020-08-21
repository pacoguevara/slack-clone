import React from "react";
import "./Header.css";
import { Avatar, Input, Icon } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/Help";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <Input />
      </div>
      <div className="header__right">
        <HelpIcon />
      </div>
    </div>
  );
}

export default Header;
