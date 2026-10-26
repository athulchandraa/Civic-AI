import React from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'


const complaints = [
  {
    id: "CIV-001",
    title: "Road Repair",
    department: "Public Works Department",
    date: "18 Oct 2026",
    status: "In Progress",
  },
  {
    id: "CIV-002",
    title: "Street Light Issue",
    department: "Local Self Government",
    date: "20 Oct 2026",
    status: "Pending",
  },
  {
    id: "CIV-003",
    title: "Waste Management",
    department: "Municipality",
    date: "22 Oct 2026",
    status: "Resolved",
  },
];

function ComplaintStatus() {
 
  return (
    <div className='flex'>
      <SideBar data={'File a Complaint'}/>
      <div className='w-full ml-65'>
        <Header/>
        <div className="mx-auto max-w-5xl p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        My Complaints
      </h1>

      <p className="mb-6 mt-2 text-sm text-gray-500">
        View the status of all your submitted complaints.
      </p>

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div
            key={complaint.id}
            className="rounded-xl border border-gray-200 bg-white p-5
            transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs text-gray-400">
                  {complaint.id}
                </p>

                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  {complaint.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {complaint.department}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  complaint.status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : complaint.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {complaint.status}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <p className="text-xs text-gray-500">
                Submitted on: {complaint.date}
              </p>

              <button
                type="button"
                className="text-sm font-medium text-green-700 hover:text-green-900"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}

export default ComplaintStatus