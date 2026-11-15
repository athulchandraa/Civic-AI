
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  ClipboardList,
  Landmark
} from "lucide-react";
import toast from "react-hot-toast";

const AdminSidebar = () => {

  const navigate=useNavigate()

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
    {
      name: "Officer Management",
      path: "/admin/officer-management",
      icon: Users
    },
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
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col fixed">

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
          <NavLink onClick={handleLogout} className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200`
                }>
            <p>Logout</p>
          </NavLink>

        </nav>

      </div>

    </div>
  );
};

export default AdminSidebar;
