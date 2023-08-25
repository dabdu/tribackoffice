import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Header from "../Header";

export default function MainLayout() {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden pt-16 ">
        <Sidebar />
        {/* <div >Navbar</div> */}

        <div className="flex flex-col w-full px-8 py-8 overflow-y-auto bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
