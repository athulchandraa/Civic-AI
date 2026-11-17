
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import {
  LayoutDashboard,
  FileText,
  Users,
  ClipboardList,
  Landmark,
  Menu,
  X
} from "lucide-react";
import toast from "react-hot-toast";

const AdminSidebar = () => {

  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
      end: true
    },
    {
      name: "Complaint View",
      path: "/admin/complaint-view",
      icon: FileText
    },
    // {
    //   name: "Officer Management",
    //   path: "/admin/officer-management",
    //   icon: Users
    // },
    {
      name: "RTI Management",
      path: "/admin/rti-management",
      icon: ClipboardList
    }
  ];

      const handleLogout=()=>{
        sessionStorage.clear("existingUser")
        sessionStorage.clear("token")
        toast.success("Logout success...")
        setTimeout(()=>{
        navigate('/')
        },1500)
      }


  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 rounded-md bg-slate-900 p-2 text-white md:hidden"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <div className={`fixed z-50 flex min-h-screen w-64 flex-col bg-slate-900 text-white transition-transform duration-300 ease-in-out md:z-auto md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>

      {/* Logo */}
      <div className="px-6 py-7 border-b border-slate-700">

        <div className="flex items-center gap-3">

          <Landmark size={30} className="text-blue-400" />

          <div>
            <h2 className="text-xl font-bold">
              Civics AI
            </h2>

            <p className="text-xs text-gray-400">
              Administration Panel
            </p>
          </div>

        </div>

      </div>

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-4 rounded-md p-1 text-white md:hidden"
      >
        <X size={24} />
      </button>

      {/* Menu */}
      <div className="px-4 py-6">

        <p className="text-xs text-gray-500 font-semibold mb-5 px-3">
          MAIN MENU
        </p>

        <nav className="space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-slate-800"
                  }`
                }
              >

                <Icon size={20} />

                <span className="text-sm font-medium">
                  {item.name}
                </span>

              </NavLink>

            );

          })}
          <NavLink onClick={() => {
            setIsOpen(false);
            handleLogout();
          }} className=" ">
            <div className="flex items-center hover:bg-slate-800 rounded px-4 py-2 gap-3  text-red-600 ">
              <IoIosLogOut className="text-2xl"/>
              <p>Logout</p>
            </div>
          </NavLink>

        </nav>

      </div>

      </div>
    </>
  );
};

export default AdminSidebar;
