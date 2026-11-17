import React, { useState } from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'
import { getComplaintHistory } from '../../api/apiService';



function ComplaintStatus() {

  const [complaint,setComplaint]=useState("")

  const getComplaintHistoryList=async()=>{
    const sessionData=JSON.parse(sessionStorage.getItem("existingUser"))
    const email=sessionData.email
    const response=await getComplaintHistory(email)
    setComplaint(response.data.data);
    
  }

  useState(()=>{
    getComplaintHistoryList()
  },[])

 
  return (
    <div className='flex'>
      <SideBar data={'File a Complaint'}/>
      <div className='w-full md:ml-60'>
        <Header/>
        <div className="mx-auto max-w-5xl p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-gray-900">
        My Complaints
      </h1>

      <p className="mb-6 mt-2 text-sm text-gray-500">
        View the status of all your submitted complaints.
      </p>

      <div className="space-y-4">
       {/* Duplication */}

       {
        complaint?.length>0 ?
          complaint?.map(item=>(
            <div
            key={item._id}
            className="rounded-xl border border-gray-200 bg-white p-5
            transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs text-gray-400">
                  {item?.complaintId}
                </p>

                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  {item?.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {item?.category}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  item.status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : complaint.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {item?.status}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <p className="text-xs text-gray-500">
                Submitted on: {item?.createdAt}
              </p>

              <button
                type="button"
                className="text-sm font-medium text-green-700 hover:text-green-900"
              >
                View Details →
              </button>
            </div>
        </div>
          ))
        :
        <div className='text-center mt-10 text-2xl text-green-600 font-medium'>
          No complaint history Found 😉
        </div>
       }
      </div>
    </div>
      </div>
    </div>
  )
}

export default ComplaintStatus