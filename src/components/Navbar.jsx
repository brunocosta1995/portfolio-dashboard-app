import React, { ùseEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi-shopping-cart";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3LIne } from "react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {Cart, Chat, Noticiation, UserProfile} from './';
import { useStateContext } from "../contexts/ContextProvider";


function Navbar() {

  const {activeMenu, setActiveMenu} = useStateContext();
  
  return <div className="flex justify-between p-2 md:mx-6"></div>;
  //1:18
}

export default Navbar;
