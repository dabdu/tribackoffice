import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import {
  MdOutlineDashboardCustomize,
  MdOutlineRestaurantMenu,
} from "react-icons/md";
import { AiFillDribbbleCircle } from "react-icons/ai";

const linkClass =
  "flex items-center w-full  gap-2 mt-4 transition-colors duration-300  px-3 py-2 hover:no-underline rounded-md text-base";
const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "",
    icon: <MdOutlineDashboardCustomize className="text-xl text-primary" />,
    dropdown: false,
  },

  {
    key: "users",
    label: "Restaurants",
    path: "#",
    icon: <MdOutlineRestaurantMenu className="text-xl text-primary" />,
    dropdown: [
      {
        key: "restaurant-admins",
        label: "Vendors",
        path: "/restaurant-admins",
        icon: <AiFillDribbbleCircle className="text-xl text-primary" />,
      },
      {
        key: "restaurants",
        label: "Restaurants",
        path: "/restaurants",
        icon: <AiFillDribbbleCircle className="text-xl text-primary" />,
      },
      {
        key: "dishes",
        label: "Dishes",
        path: "/dishes",
        icon: <AiFillDribbbleCircle className="text-xl text-primary" />,
      },
      {
        key: "reservations",
        label: "Reservations",
        path: "/reservations",
        icon: <AiFillDribbbleCircle className="text-xl text-primary" />,
      },
      {
        key: "dish-orders",
        label: "Dish Orders",
        path: "/dish-orders",
        icon: <AiFillDribbbleCircle className="text-xl text-primary" />,
      },
    ],
  },
];
export default function Sidebar() {
  return (
    <div className="bg-white w-80  flex-col border-r border-neutral-300 hidden lg:flex md:flex ">
      <div className="pb-8 flex flex-1 flex-col gap-0.5 overflow-y-auto">
        {/* <Dropdown /> */}
        <div className="p-4">
          {items.map((link) =>
            link.dropdown === false ? (
              <SidebarLink key={link.key} link={link} />
            ) : (
              <SidebarButton key={link.key} link={link} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-primary text-white hover:text-white"
          : "text-neutral-900 hover:text-primary ",
        linkClass
      )}
    >
      <span className="text-2xl">{link.icon}</span>
      <span className="pl-4 text-base">{link.label}</span>
    </Link>
  );
}

function SidebarButton({ link }) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={classNames(
          isOpen === true
            ? "text-primary "
            : "text-neutral-900 hover:text-primary ",
          "justify-between",
          linkClass
        )}
      >
        <span className={"flex items-center"}>
          <span className="text-2xl">{link.icon}</span>
          <span className="pl-4 text-base">{link.label}</span>
        </span>
        {isOpen ? (
          <RiArrowUpSLine fontSize={24} />
        ) : (
          <RiArrowDownSLine fontSize={24} />
        )}
      </button>

      {isOpen && (
        <div className="bg-white w-full  ">
          {link.dropdown.map((item) => (
            <Link
              to={item.path}
              className={classNames(
                pathname === item.path
                  ? "bg-primary text-white hover:text-white"
                  : "text-neutral-900 font-light hover:text-primary ",
                "flex items-center w-full mt-2 px-3 py-2 rounded-md transition-colors duration-300"
              )}
            >
              <span className="text-xs">{item.icon}</span>
              <span className="pl-4 text-md font-normal">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
