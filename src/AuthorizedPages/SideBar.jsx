import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SideBar(data) {
   const [activeMenu, setActiveMenu] = useState("Dashboard");
   const Location=useNavigate()

   const menuItems = [
    { name: "Dashboard", icon: "▦" },
    { name: "File a Complaint", icon: "📝" },
    { name: "Complaint Status", icon: "☷" },
    { name: "Know a Program", icon: "🏛️" },
    { name: "RTI", icon: "📄" },
    { name: "My Profile", icon: "👤" },
  ];


  const SelectedMenu=(menu)=>{
    setActiveMenu(menu)
   if(menu=="Dashboard"){
    Location('/user/:id')
   }else if(menu=="File a Complaint"){
    Location('/user/complaint/:id')
   }else if(menu=="Complaint Status"){
    Location('/user/complaint-status/:id')
   }else if(menu=="Know a Program"){
    alert("Item Coming Soon...")
   }else if(menu=="RTI"){
    Location('/user/rti/:id')
   }else if(menu=="logout"){
    Location('/')
   }
    
  }


  return (
    <aside className="flex h-screen w-64 flex-col border-r fixed border-gray-200 bg-white px-4 py-6">

      {/* Logo */}
      <div className="mb-10 px-3">
        <h1 className="text-2xl font-bold text-emerald-700">
          Civic AI
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          Citizen Portal
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => SelectedMenu(item.name)}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-medium transition ${
              activeMenu === data
                ? "bg-emerald-100 text-emerald-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-200 pt-4">
        <button
          onClick={() => SelectedMenu("logout")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-red-600 transition hover:bg-red-50"
        >
          <span className="text-xl">⇥</span>
          <span>Logout</span>
        </button>
      </div>

    </aside>
  )
}

export default SideBar