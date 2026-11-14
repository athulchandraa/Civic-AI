
import AdminSidebar from "../Admin/AdminSidebar";
import { Search, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllComplaintsAPI, updateComplaintsAPI } from "../../api/apiService";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaCross, FaFileContract } from "react-icons/fa";
import { RiLoopLeftFill } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import toast from "react-hot-toast";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxWidth:'95vw',
  maxHeight:'90vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ComplaintView = () => {

  const [search, setSearch] = useState("");
  const [complaint,setComplaints]=useState(null)
  const [manageComplaint,setManageComplaint]=useState("")
  console.log(manageComplaint);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const getComplaintDetails=async()=>{
    const response=await getAllComplaintsAPI()
    setComplaints(response.data.data);
  }
  useEffect(()=>{
    getComplaintDetails()
  },[])

  //Handle Complaint
  const handleComplaint=(item)=>{
    console.log(item);
    setManageComplaint(item)
    setOpen(true)
  }

  //UPDATE COMPLAINT
  const updateComplaintStatus=async(status)=>{
    const id=manageComplaint?._id
    const response=await updateComplaintsAPI(id,status)
    if(response.status==200){
      toast.success("Status Updated")
      getComplaintDetails()
      handleClose()
    }
  }

  //Filter Complaints
    const filteredComplaints = complaint?.filter((item) =>
    item.complaintId?.toLowerCase()?.includes(search.toLowerCase()) ||
    item?.location?.toLowerCase()?.includes(search.toLowerCase()) ||
    item?.subject?.toLowerCase()?.includes(search.toLowerCase())
  );

  console.log(filteredComplaints);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 min-w-0 p-6 ml-65">

        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-gray-800">
            Complaint Management
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            View and manage citizen complaints
          </p>
        </div>

        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">

          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={19}
            />

            <input
              type="text"
              placeholder="Search complaints..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Complaints Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="p-5 border-b">
            <h2 className="font-semibold text-gray-800">
              All Complaints
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-sm text-left">

              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-4">Complaint ID</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Complaint</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              {/* Duplication */}
              {
                complaint?.length>0 ?
                filteredComplaints?.map(item=>(
                  <tbody key={item?.id}>

                <tr key={item?.id} className="border-b hover:bg-gray-50">

                    <td className="p-4 font-medium">
                     {item?.complaintId}
                    </td>

                    <td className="p-4">
                      {item?.location}
                    </td>

                    <td className="p-4">
                      {item?.category}
                    </td>

                    <td className="p-4">
                      {item?.title}
                    </td>

                    <td className="p-4 text-gray-500">
                      {item?.createdAt}
                    </td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        onClick={() => handleComplaint(item)}
                      >
                        <Eye size={17} />
                        View
                      </button>
                    </td>

                  </tr>

                  {/* <tr>
                    <td colSpan="7" className="p-6 text-center text-gray-500">
                      No complaints found
                    </td>
                  </tr> */}

              </tbody>
                ))
                :
                <div>
                  No Complaint
                </div>
              }
              
              

            </table>

          </div>
        </div>
      </div>

      {/* Modal View */}
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="p-2 bg-blue-200 w-fit rounded-full">
                  <FaFileContract className="text-2xl text-blue-700"/>
                </div>
                <div>
                  <p className="text-xl font-medium">Complaint Details</p>
                  <p className="text-sm text-gray-600 font-medium">Complint ID : {manageComplaint?.complaintId}</p>
                </div>
    
              </div>
              <div>
                <p className="bg-red-400 text-white px-3 w-fit rounded-2xl">{manageComplaint?.status}</p>
              </div>
            </div>
            {/* Complaint Information */}
          <div className="border border-gray-200 mt-5 rounded-xl overflow-hidden">

            <div className="bg-blue-50 px-5 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Complaint Information
              </h3>
            </div>

            <div className="p-5 space-y-4">

              {[
                ["Complaint ID", manageComplaint?.complaintId],
                ["Subject", manageComplaint?.title],
                ["Category", manageComplaint?.category],
                ["Description", manageComplaint?.description],
                ["Location", manageComplaint?.location],
                ["Submitted By", manageComplaint?.email],
                ["Contact", manageComplaint?.email],
                ["Submitted On", manageComplaint?.createdAt],
                ["Assigned Department", manageComplaint?.suggestedAuthority],
                ["Status", manageComplaint?.status],
              ].map(([label, value], index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-3 border-b border-gray-100 pb-3 last:border-0"
                >
                  <p className="text-sm font-semibold text-gray-600">
                    {label}
                  </p>

                  <p className="col-span-2 text-sm text-gray-800 break-words">
                    {value || "N/A"}
                  </p>
                </div>
              ))}

            </div>
          </div>
          <div className="mt-4 flex justify-around">
            <button onClick={()=>updateComplaintStatus("Under Review")} className="px-3 py-2 text-white bg-blue-600 rounded flex items-center gap-2"><RiLoopLeftFill />Under Review</button>
            <button onClick={()=>updateComplaintStatus("Resolved")} className="px-3 py-2 text-white bg-green-600 rounded flex items-center gap-2"><MdOutlineDone />Solved</button>
            <button onClick={()=>updateComplaintStatus("Rejected")} className="px-3 py-2 text-white bg-red-600 rounded flex items-center gap-2"><RxCross1 />Rejected</button>
          </div>

          </div>
        </Box>
      </Modal>
    </div>

    </div>
  );
};

export default ComplaintView;
