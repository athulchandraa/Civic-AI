
import React, { useEffect, useState } from "react";
import AdminSidebar from "../Admin/AdminSidebar";
import {
  Search,
  Eye,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";
import { getAllRTIAPI } from "../../api/apiService";
import LoadingScreen from "../Components/LoadingScreen";

const initialRTIRequests = [
  {
    id: "RTI001",
    applicant: "Arun Kumar",
    subject: "Details of road construction works",
    department: "PWD Department",
    date: "12 Nov 2026",
    status: "Pending",
    description:
      "Requesting details about road construction works and expenditure in my locality.",
  },
  {
    id: "RTI002",
    applicant: "Anjali S",
    subject: "Details of government schemes",
    department: "Social Justice Department",
    date: "10 Nov 2026",
    status: "Approved",
    description:
      "Requesting information about currently available government schemes.",
  },
  {
    id: "RTI003",
    applicant: "Rahul P",
    subject: "Details of public fund utilization",
    department: "Finance Department",
    date: "08 Nov 2026",
    status: "Rejected",
    description:
      "Requesting details regarding public fund utilization.",
  },
];

const RtiManagement = () => {
  const [requests, setRequests] = useState(initialRTIRequests);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedRTI, setSelectedRTI] = useState(null);
  const[allRTI,setALLRti]=useState(null)  
  const [isLoading,setIsLoading]=useState(true)

  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );

    setSelectedRTI((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev
    );
  };

  const filteredRequests = requests.filter((item) => {
    const matchesSearch =
      item.applicant.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  // const stats = [
  //   {
  //     title: "Total Applications",
  //     value: requests.length,
  //     icon: <FileText size={22} />,
  //     color: "bg-blue-100 text-blue-600",
  //   },
  //   {
  //     title: "Pending",
  //     value: requests.filter((r) => r.status === "Pending").length,
  //     icon: <Clock size={22} />,
  //     color: "bg-yellow-100 text-yellow-600",
  //   },
  //   {
  //     title: "Approved",
  //     value: requests.filter((r) => r.status === "Approved").length,
  //     icon: <CheckCircle size={22} />,
  //     color: "bg-green-100 text-green-600",
  //   },
  //   {
  //     title: "Rejected",
  //     value: requests.filter((r) => r.status === "Rejected").length,
  //     icon: <XCircle size={22} />,
  //     color: "bg-red-100 text-red-600",
  //   },
  // ];

  const statusStyle = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const getAllRtiData=async()=>{
    const response=await getAllRTIAPI()
    setALLRti(response.data.data);
    setIsLoading(false)
  }  

  useEffect(()=>{
    getAllRtiData()
  },[])

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="flex-1 p-5 md:p-8 overflow-x-hidden md:ml-60">
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-gray-800">
            RTI Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and review Right to Information applications
          </p>
        </div>

        {/* Statistics */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-4"
            >
              <div className={`p-3 rounded-lg ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.value}
                </h2>
              </div>
            </div>
          ))}
        </div> */}

        {/* Applications Table */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-5">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                RTI Applications
              </h2>
              <p className="text-sm text-gray-500">
                View and manage submitted applications
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-4">RTI ID</th>
                  <th className="p-4">Applicant</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Department</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">BPL</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {allRTI?.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium text-blue-600">
                      {item._id}
                    </td>
                    <td className="p-4 text-gray-700">
                      {item.applicantName}
                    </td>
                    <td className="p-4 text-gray-700 min-w-48">
                      {item.subject}
                    </td>
                    <td className="p-4 text-gray-600">
                      {item.authority}
                    </td>
                    <td className="p-4 text-gray-600 whitespace-nowrap">
                      {item.submittedAt}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[item.status]}`}
                      >
                        {item.bpl}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => setSelectedRTI(item)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <Eye size={17} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredRequests.length === 0 && (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center p-8 text-gray-500"
                    >
                      No RTI applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* View RTI Modal */}
        {selectedRTI && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl w-full max-w-xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-bold text-gray-800">
                  RTI Application Details
                </h2>
                <button
                  onClick={() => setSelectedRTI(null)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <p><strong>RTI ID:</strong> {selectedRTI._id}</p>
                <p><strong>Applicant:</strong> {selectedRTI.applicantName}</p>
                <p><strong>Department:</strong> {selectedRTI.authority}</p>
                <p><strong>Subject:</strong> {selectedRTI.subject}</p>
                <p><strong>Submitted Date:</strong> {selectedRTI.submittedAt}</p>
                <p>
                  <strong>Description:</strong>
                  <span className="block mt-1 text-gray-600">
                    {selectedRTI.information}
                  </span>
                </p>
                <p>
                  <strong>Current Status:</strong>{" "}
                  <span className={`px-2 py-1 rounded-full text-xs ${statusStyle[selectedRTI.status]}`}>
                    {selectedRTI.status}
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                <button
                  onClick={() => updateStatus(selectedRTI.id, "Approved")}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(selectedRTI.id, "Rejected")}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
                >
                  Reject
                </button>

                <button
                  onClick={() => updateStatus(selectedRTI.id, "Pending")}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600"
                >
                  Mark Pending
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {
        isLoading &&
        <div>
        <LoadingScreen/>
      </div>}

    </div>
  );
};

export default RtiManagement;
