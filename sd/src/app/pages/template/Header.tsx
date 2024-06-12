'use client'
import { useState } from "react"
import { Menu } from "./Menu"
import { Bell } from "./Bell";
import { useLocation, Link } from "react-router-dom";
import { UserProfile } from "./ProfileAvatar";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const slugRoute = location.pathname.split('/');


  const toggleMenu = () => {
    if (menu == true) {
      setMenu(false);

    } else {
      setMenu(true)
    }
  }

  return <>
    <header id="header">
      <nav id="headerNav" className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center text-4xl bg-gray-300 w-[5rem] h-[5rem] p-8 rounded-full">
            <Link to="/Home">
            🐘
            </Link>
          </div>
          <div className="text-3xl cursor-pointer p-3 rounded-lg" style={{ background: "#FBF9FF" }} onClick={toggleMenu}> ☰</div>
        </div>
        <div className="ml-4 font-bold text-2xl uppercase">
          {slugRoute}
        </div>


        <UserProfile />
        <Bell />
      </nav>
    </header>
    {menu == true &&
      <Menu closeModal={toggleMenu} />
    }
  </>
}
