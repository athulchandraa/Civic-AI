
import { Outlet } from "react-router-dom";
import AdminSidebar from "../Admin/AdminSidebar";

const AdminLayout = () => {

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Common Sidebar */}
      <AdminSidebar />

      {/* Dynamic Content */}
      <div className="flex-1 min-w-0">

        <main className="p-6">

          <Outlet />

        </main>

      </div>

    </div>

  );

};

export default AdminLayout;
