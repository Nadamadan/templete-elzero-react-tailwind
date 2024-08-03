import React from "react";
import Logo from "../images/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "Portfolio",
    link: "/Portfolio",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
  },
  {
    id: 5,
    name: "Skills",
    link: "/skills",
  },
  {
    id: 6,
    name: "Pricing",
    link: "/pricing",
  },
  {
    id: 7,
    name: "Contact",
    link: "/contact",
  },
 
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-slate-500/40 ">
        <div className="container ">
          <div className="flex justify-end items-center ">
            <div>
                <img src={Logo} alt="Logo" className="w-33 h-37 absolute left-7 top-12" />
            </div>
            <div className="flex justify-between items-end w-2/3">
              <div>
              
              </div>
              <ul className=" flex items-center  ">
                {Menu.map((menu) => (
                  <li key={menu.id} >
                    <a
                      href={menu.link}
                      className="inline-block py-2 px-2 hover:text-cyan-500 text-2xl my-10 mx-4" 
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;