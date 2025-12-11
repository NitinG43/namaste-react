import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header= ()=>{
  const [btnName, setBtnName]=useState("Login");
  return (
    <div className="flex justify-between bg-gray-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {useOnlineStatus()===true? "✅": "❌"}
          </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login-btn" onClick={
            ()=>{
              btnName==='Login' ? setBtnName("Logout"):setBtnName("Login");
            }
          }>{btnName}</button>
        </ul>

      </div>
    </div>
  );
}

export default Header;