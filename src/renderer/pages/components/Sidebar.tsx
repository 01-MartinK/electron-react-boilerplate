import React, { Component, ReactNode } from "react";
import { IconContext, IconType } from "react-icons";
import {BsFillGearFill, BsDownload} from 'react-icons/bs';
import { AiFillAppstore } from 'react-icons/ai';

import './Sidebar.scss';

class Sidebar extends Component {
  render(): React.ReactNode {
    return(
      <div className="sidebar">
        <a><AiFillAppstore style={{width: "4vh", height: "4vh"}}/></a>
        <a><BsDownload style={{width: "4vh", height: "4vh"}}/></a>
        <a><BsFillGearFill style={{width: "4vh", height: "4vh"}}/></a>
      </div>
    );
  }
}

export default Sidebar;
