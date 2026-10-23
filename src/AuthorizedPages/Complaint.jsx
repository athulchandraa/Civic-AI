import React, { useState } from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'


const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
];

const categories = [
  "Roads and Transportation",
  "Water Supply",
  "Electricity",
  "Health and Sanitation",
  "Education",
  "Public Distribution",
  "Government Services",
  "Corruption",
  "Environment",
  "Other",
];

const authorityMap = {
  "Roads and Transportation": "PWD / Local Self Government Department",
  "Water Supply": "Kerala Water Authority / Local Body",
  Electricity: "Kerala State Electricity Board",
  "Health and Sanitation": "Health Department / Local Body",
  Education: "General Education Department",
  "Public Distribution": "Civil Supplies Department",
  "Government Services": "Concerned Government Department",
  Corruption: "Vigilance and Anti-Corruption Bureau",
  Environment: "Environment Department / Local Authority",
  Other: "Authority to be identified after review",
};





function Complaint() {

  const [form, setForm] = useState({
    title: "",
    category: "",
    district: "",
    localBody: "",
    location: "",
    description: "",
  });

  console.log(form);
  

  const [files, setFiles] = useState([]);
  const [analysis, setAnalysis] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [message, setMessage] = useState("");
  const [complaintId, setComplaintId] = useState("");

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  };

  const analyzeComplaint = () => {
    if (!form.category || !form.description.trim()) {
      setMessage(
        "Select a category and enter your complaint description first."
      );
      return;
    }

    setAnalyzing(true);
    setAnalysis("");

    // Demo analysis. Connect your AI backend here.
    setTimeout(() => {
      setAnalysis(authorityMap[form.category] || authorityMap.Other);
      setAnalyzing(false);
    }, 600);
  };

  const handleFiles = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];
    const maxSize = 5 * 1024 * 1024;

    const invalid = selectedFiles.find(
      (file) =>
        !allowedTypes.includes(file.type) || file.size > maxSize
    );

    if (invalid) {
      setMessage(
        "Only JPG, PNG, WEBP or PDF files up to 5 MB each are allowed."
      );
      e.target.value = "";
      return;
    }

    setFiles(selectedFiles);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (form.description.trim().length < 10) {
      setMessage("Please describe your complaint in at least 10 characters.");
      return;
    }

    const id = `CIV-${Date.now().toString().slice(-8)}`;

    const complaintData = {
      ...form,
      suggestedAuthority: analysis || "Pending authority review",
      status: "Pending",
      complaintId: id,
      createdAt: new Date().toISOString(),
      attachments: files.map((file) => file.name),
    };

    // Demo only: replace with your Express API request.
    console.log("Complaint data:", complaintData);

    setComplaintId(id);
    setMessage(
      "Demo submission successful. Connect the backend to save this complaint permanently."
    );
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";


  return (
    <div className='flex'>
      <SideBar data={'File a Complaint'}/>
      <div className='w-full ml-60'>
        <Header/>
        <div className='p-3'>
          {/* Chatgpt Content */}

          <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-5xl">
        {/* Page heading */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
            <span>Dashboard</span>
            <span>/</span>
            <span className="font-medium text-blue-700">
              File a Complaint
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Submit a Complaint
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Report a public issue and let Civics AI help identify
                the appropriate government authority.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Citizen Portal
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Complaint information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-7 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Complaint Details
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Tell us about the issue you want to report.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="title">
                  Complaint Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={updateField}
                  className={inputClass}
                  placeholder="e.g. Damaged road in my locality"
                  required
                  maxLength={150}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="category">
                  Complaint Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={(e) => {
                    updateField(e);
                    setAnalysis("");
                  }}
                  className={inputClass}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="district">
                  District <span className="text-red-500">*</span>
                </label>
                <select
                  id="district"
                  name="district"
                  value={form.district}
                  onChange={updateField}
                  className={inputClass}
                  required
                >
                  <option value="">Select district</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="localBody">
                  Local Body
                </label>
                <input
                  id="localBody"
                  name="localBody"
                  value={form.localBody}
                  onChange={updateField}
                  className={inputClass}
                  placeholder="Panchayat / Municipality / Corporation"
                  maxLength={150}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="location">
                  Issue Location
                </label>
                <input
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={updateField}
                  className={inputClass}
                  placeholder="Ward, street or nearby landmark"
                  maxLength={250}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClass} htmlFor="description">
                  Complaint Description{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={updateField}
                  className={`${inputClass} min-h-36 resize-y`}
                  placeholder="Explain the issue, when it started, and how it affects you or the public..."
                  required
                  minLength={10}
                  maxLength={5000}
                />
                <p className="mt-2 text-right text-xs text-slate-400">
                  {form.description.length}/5000 characters
                </p>
              </div>
            </div>
          </section>

          {/* Evidence upload */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path d="M12 16V4m-5 5 5-5 5 5" />
                  <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Supporting Evidence
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Upload photographs or documents if available.
                </p>
              </div>
            </div>

            <label
              htmlFor="evidence"
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-9 text-center transition hover:border-blue-400 hover:bg-blue-50/50"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path d="M12 16V4m-5 5 5-5 5 5" />
                  <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
                </svg>
              </div>
              <span className="font-semibold text-slate-800">
                Click to upload evidence
              </span>
              <span className="mt-2 text-xs text-slate-500">
                JPG, PNG, WEBP or PDF · Maximum 5 MB per file
              </span>
              <input
                id="evidence"
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.webp,.pdf"
                onChange={handleFiles}
                className="sr-only"
              />
            </label>

            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
                  >
                    <span className="text-sm text-blue-700">📎</span>
                    <span className="min-w-0 flex-1 truncate text-sm text-slate-700">
                      {file.name}
                    </span>
                    <span className="text-xs text-slate-400">
                      {(file.size / 1024).toFixed(0)} KB
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* AI analysis */}
          {/* <section className="overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2Z" />
                  <path d="m19 14 1.2 2.8L23 18l-2.8 1.1L19 22l-1.1-2.9L15 18l2.9-1.2Z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-900">
                  AI Complaint Analysis
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Analyze your complaint to identify a possible
                  government department or responsible authority.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={analyzeComplaint}
              disabled={analyzing}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {analyzing ? "Analyzing..." : "Analyze Complaint"}
              {!analyzing && <span>→</span>}
            </button>

            {analysis && (
              <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Suggested authority
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  {analysis}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  This is a preliminary suggestion based on the selected
                  category, not a verified AI result or confirmed routing.
                </p>
              </div>
            )}
          </section> */}

          {/* Feedback */}
          {message && (
            <div
              role="status"
              className={`rounded-xl border p-4 text-sm leading-6 ${
                complaintId
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-amber-200 bg-amber-50 text-amber-800"
              }`}
            >
              {message}
              {complaintId && (
                <p className="mt-2 font-bold">
                  Demo Complaint ID: {complaintId}
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="max-w-md text-xs leading-5 text-slate-500">
              By submitting, you confirm that the information provided
              is accurate to the best of your knowledge.
            </p>

            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
              Submit Complaint
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M22 2 15 22l-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  
          
        </div>
      </div>
    </div>
  )
}

export default Complaint