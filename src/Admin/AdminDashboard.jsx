
import AdminSidebar from "../Admin/AdminSidebar";
import {
  FileText,
  Clock,
  CheckCircle,
  Users,
  ClipboardList
} from "lucide-react";

const AdminDashboard = () => {

  const stats = [
    {
      title: "Total Complaints",
      value: 125,
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      title: "Pending Complaints",
      value: 35,
      icon: Clock,
      color: "text-orange-600",
      bg: "bg-orange-100"
    },
    {
      title: "Resolved Complaints",
      value: 78,
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Total Officers",
      value: 48,
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Existing Sidebar */}
      <AdminSidebar />

      {/* Dashboard Content */}
      <div className="flex-1 min-w-0 p-6 md:ml-60">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Welcome to Civics AI Administration Panel
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>

                    <h2 className="text-3xl font-bold mt-3 text-gray-800">
                      {item.value}
                    </h2>
                  </div>

                  <div className={`p-3 rounded-xl ${item.bg}`}>
                    <Icon size={25} className={item.color} />
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7">

          {/* Complaint Overview */}
          <div className="bg-white p-6 rounded-xl shadow-sm">

            <h2 className="text-lg font-semibold text-gray-800">
              Complaint Overview
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Current complaint statistics
            </p>

            <div className="mt-7 space-y-6">

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Resolved</span>
                  <span>78</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-[62%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Pending</span>
                  <span>35</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-orange-500 rounded-full w-[28%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span>Under Review</span>
                  <span>12</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-[10%]" />
                </div>
              </div>

            </div>
          </div>

          {/* RTI Summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm">

            <h2 className="text-lg font-semibold text-gray-800">
              RTI Applications
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Application summary
            </p>

            <div className="grid grid-cols-2 gap-4 mt-7">

              <div className="bg-purple-50 p-5 rounded-xl">
                <ClipboardList className="text-purple-600 mb-3" size={25} />
                <h3 className="text-3xl font-bold">65</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Total Applications
                </p>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl">
                <Clock className="text-orange-600 mb-3" size={25} />
                <h3 className="text-3xl font-bold">18</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Pending Applications
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
