import React from 'react'
import { QRCodeSVG } from "qrcode.react";
import { FiPrinter } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';


function RtiReceipt() {

  const location=useLocation()
  const receipt1=location.state
  console.log(receipt1);
  

    const details = [
    { icon: "📅", label: "Submitted On", value: receipt1?.submittedAt },
    { icon: "👤", label: "Applicant Name", value: receipt1?.applicantName },
    { icon: "✉️", label: "Email", value: receipt1?.email },
    { icon: "📞", label: "Mobile Number", value: receipt1?.phone },
    { icon: "🏛️", label: "Public Authority", value: receipt1?.authority },
    { icon: "📄", label: "Subject", value: receipt1?.subject },
  ];  

  const downloadReciept=()=>{
    window.print()
  }




  
  return (
    <div>
      <div id='receipt' className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl border border-gray-200 shadow-lg p-5 sm:p-9">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-bold">
            ✓
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Civic AI
            </h1>
            <p className="text-sm text-gray-500">
              Citizen Governance Platform
            </p>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-5xl mx-auto mb-5">
            ✓
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Your RTI request has been submitted successfully.
          </h2>

          <div className="mt-5 bg-green-50 rounded-xl p-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <span className="text-gray-700">
              Acknowledgment No.
            </span>
            <strong className="text-green-800 text-lg break-all">
              {receipt1?._id}
            </strong>
          </div>
        </div>

        {/* Details */}
        <div className="border-y border-green-200 py-3">
          {details.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[28px_1fr] sm:grid-cols-[35px_180px_15px_1fr] gap-3 py-4 border-b border-gray-100 last:border-0"
            >
              <span className="text-xl">{item.icon}</span>

              <strong className="text-sm text-slate-800">
                {item.label}
              </strong>

              <span className="hidden sm:block">:</span>

              <p className="col-start-2 sm:col-start-auto text-sm text-gray-600 leading-6 break-words">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center py-8">
          <div className="border-2 border-green-500 rounded-xl p-2">
            <QRCodeSVG
              value={"..."}
              size={145}
              level="H"
              includeMargin
            />
          </div>

          <h3 className="mt-4 text-lg font-bold text-green-800">
            Scan to Verify
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Verify your RTI request status
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-5 text-center">
          <p className="text-sm text-gray-500">
            Powered by{" "}
            <span className="font-bold text-green-700">
              Civic AI
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Citizen Governance Platform
          </p>
        </div>

      </div>
    </div>

      <div className='flex justify-center my-10 gap-5'>
        <Link to={'/user'} className='px-3 py-1 bg-blue-500 rounded text-white font-medium flex items-center gap-2'><FaArrowLeft/>Home</Link>
        <button onClick={downloadReciept} className='px-3 py-1 bg-green-600 text-white font-medium rounded flex gap-1 items-center'><FiPrinter />Print</button>
        
      </div>

    </div>
  )
}

export default RtiReceipt