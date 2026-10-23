import React, { useState } from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'


const districts = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta",
  "Alappuzha", "Kottayam", "Idukki", "Ernakulam",
  "Thrissur", "Palakkad", "Malappuram", "Kozhikode",
  "Wayanad", "Kannur", "Kasaragod",
];

const departments = [
  "District Collectorate",
  "Revenue Department",
  "Local Self Government Department",
  "Public Works Department (PWD)",
  "Health Department",
  "Education Department",
  "Civil Supplies Department",
  "Police Department",
  "Kerala Water Authority",
  "Other Public Authority",
];

function Rti() {

    const [form, setForm] = useState({
    applicantName: "",
    address: "",
    district: "",
    email: "",
    phone: "",
    authority: "",
    officeAddress: "",
    subject: "",
    information: "",
    fromDate: "",
    toDate: "",
    format: "Electronic copy",
    bpl: "No",
  });

  const [document, setDocument] = useState(null);
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  const sectionClass =
    "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8";

  const submitForm = (e) => {
    e.preventDefault();

    if (form.toDate && form.fromDate && form.toDate < form.fromDate) {
      setMessage("The end date cannot be earlier than the start date.");
      return;
    }

    const referenceId = `RTI-${Date.now().toString().slice(-8)}`;

    const application = {
      ...form,
      referenceId,
      attachmentName: document?.name || null,
      status: "Draft submitted in demo",
      createdAt: new Date().toISOString(),
    };

    // Demo only. Connect this to your Express backend.
    console.log("RTI application:", application);

    setReference(referenceId);
    setMessage(
      "Demo completed. This application has not been officially filed with a public authority."
    );
  };

  return (
    <div className='flex'>
      <SideBar data={'File a Complaint'}/>
      <div className='w-full ml-65'>
        <Header/>
        <div className='p-3'>
          <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <p className="mb-3 text-sm text-slate-500">
            Dashboard / RTI Application
          </p>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    className="h-7 w-7">
                    <path d="M4 21h16M6 21V7l6-4 6 4v14" />
                    <path d="M9 10h6M9 14h6M9 18h6" />
                  </svg>
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    RTI Application
                  </h1>
                  <p className="mt-1 text-sm text-slate-500">
                    Right to Information · Civics AI
                  </p>
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                Request information held by a public authority under the
                Right to Information Act, 2005.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-800">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              New Application
            </div>
          </div>
        </div>

        {/* Information banner */}
        <div className="mb-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <span className="text-xl">ⓘ</span>
          <div>
            <h2 className="text-sm font-bold text-amber-900">
              Before you submit
            </h2>
            <p className="mt-1 text-sm leading-6 text-amber-800">
              Identify the public authority holding the information.
              Request specific records, documents or data. This portal
              form is a prototype and does not itself file an official RTI.
            </p>
          </div>
        </div>

        <form onSubmit={submitForm} className="space-y-6">

          {/* Applicant details */}
          <section className={sectionClass}>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <span className="text-lg">01</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Applicant Details
                </h2>
                <p className="text-sm text-slate-500">
                  Enter your contact and correspondence details.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className={labelClass}>Full Name *</label>
                <input
                  name="applicantName"
                  value={form.applicantName}
                  onChange={update}
                  className={inputClass}
                  placeholder="Enter your full name"
                  maxLength={150}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>
                  Complete Postal Address *
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={update}
                  className={`${inputClass} min-h-24 resize-y`}
                  placeholder="House name, street, post office, PIN code"
                  maxLength={1000}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>District *</label>
                <select
                  name="district"
                  value={form.district}
                  onChange={update}
                  className={inputClass}
                  required
                >
                  <option value="">Select district</option>
                  {districts.map((district) => (
                    <option key={district}>{district}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  className={inputClass}
                  placeholder="you@example.com"
                  maxLength={254}
                />
              </div>

              <div>
                <label className={labelClass}>Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  className={inputClass}
                  placeholder="Enter mobile number"
                  pattern="[0-9+\-\s()]{7,20}"
                />
              </div>

              <div>
                <label className={labelClass}>
                  BPL Category *
                </label>
                <select
                  name="bpl"
                  value={form.bpl}
                  onChange={update}
                  className={inputClass}
                  required
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  If claiming BPL fee exemption, supporting proof may be
                  required under the applicable rules.
                </p>
              </div>
            </div>
          </section>

          {/* Public authority */}
          <section className={sectionClass}>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <span className="text-lg">02</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Public Authority
                </h2>
                <p className="text-sm text-slate-500">
                  Specify the office that may hold the requested records.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className={labelClass}>
                  Department / Public Authority *
                </label>
                <select
                  name="authority"
                  value={form.authority}
                  onChange={update}
                  className={inputClass}
                  required
                >
                  <option value="">Select public authority</option>
                  {departments.map((department) => (
                    <option key={department}>{department}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>
                  Office Name and Address
                </label>
                <textarea
                  name="officeAddress"
                  value={form.officeAddress}
                  onChange={update}
                  className={`${inputClass} min-h-24 resize-y`}
                  placeholder="Enter office name, Public Information Officer (PIO), and address if known"
                  maxLength={1000}
                />
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-900">
                Not sure which department to select?
              </p>
              <p className="mt-1 text-sm leading-6 text-blue-800">
                Civics AI can help suggest a possible authority. Verify the
                correct Public Information Officer before official filing.
              </p>
            </div>
          </section>

          {/* Requested information */}
          <section className={sectionClass}>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <span className="text-lg">03</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Information Requested
                </h2>
                <p className="text-sm text-slate-500">
                  Clearly describe the existing records you need.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <label className={labelClass}>Subject of RTI *</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={update}
                  className={inputClass}
                  placeholder="e.g. Details of road maintenance expenditure"
                  maxLength={200}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>
                  Details of Information Required *
                </label>
                <textarea
                  name="information"
                  value={form.information}
                  onChange={update}
                  className={`${inputClass} min-h-44 resize-y`}
                  placeholder={
                    "1. Please provide copies of relevant orders or records.\n2. Please provide the expenditure statement for the specified period.\n3. Please provide the date and reference number of the relevant sanction order."
                  }
                  minLength={10}
                  maxLength={10000}
                  required
                />
                <div className="mt-2 flex justify-between gap-3 text-xs text-slate-400">
                  <span>Ask for specific records or documents.</span>
                  <span>{form.information.length}/10000</span>
                </div>
              </div>

              <div>
                <p className={labelClass}>
                  Period to Which Information Relates
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs text-slate-500">
                      From date
                    </label>
                    <input
                      type="date"
                      name="fromDate"
                      value={form.fromDate}
                      onChange={update}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs text-slate-500">
                      To date
                    </label>
                    <input
                      type="date"
                      name="toDate"
                      value={form.toDate}
                      onChange={update}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Preferred Response Format *
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    "Electronic copy",
                    "Photocopies",
                    "Inspection of records",
                  ].map((format) => (
                    <label
                      key={format}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition ${
                        form.format === format
                          ? "border-blue-500 bg-blue-50 text-blue-800"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="format"
                        value={format}
                        checked={form.format === format}
                        onChange={update}
                        className="accent-blue-700"
                      />
                      {format}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Supporting documents */}
          <section className={sectionClass}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <span className="text-lg">04</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Supporting Documents
                </h2>
                <p className="text-sm text-slate-500">
                  Optional documents, if relevant to your request.
                </p>
              </div>
            </div>

            <label
              htmlFor="rti-document"
              className="flex cursor-pointer flex-col items-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50"
            >
              <span className="mb-3 text-3xl">📄</span>
              <span className="text-sm font-semibold text-slate-800">
                {document ? document.name : "Choose a document to upload"}
              </span>
              <span className="mt-2 text-xs text-slate-500">
                PDF, JPG or PNG · Maximum 5 MB
              </span>
              <input
                id="rti-document"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  const allowed = [
                    "application/pdf",
                    "image/jpeg",
                    "image/png",
                  ];

                  if (!allowed.includes(file.type) ||
                      file.size > 5 * 1024 * 1024) {
                    setMessage("Choose a PDF, JPG or PNG file up to 5 MB.");
                    e.target.value = "";
                    setDocument(null);
                    return;
                  }

                  setDocument(file);
                  setMessage("");
                }}
              />
            </label>
          </section>

          {/* Consent and submit */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-6 flex gap-3">
              <span className="text-xl text-emerald-700">✓</span>
              <p className="text-sm leading-6 text-slate-600">
                I confirm that the information provided is accurate and
                that this request seeks information or records held by a
                public authority.
              </p>
            </div>

            {message && (
              <div
                role="status"
                className={`mb-5 rounded-xl p-4 text-sm leading-6 ${
                  reference
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border border-amber-200 bg-amber-50 text-amber-800"
                }`}
              >
                {message}
                {reference && (
                  <p className="mt-2 font-bold">
                    Demo Reference: {reference}
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setForm({
                    applicantName: "",
                    address: "",
                    district: "",
                    email: "",
                    phone: "",
                    authority: "",
                    officeAddress: "",
                    subject: "",
                    information: "",
                    fromDate: "",
                    toDate: "",
                    format: "Electronic copy",
                    bpl: "No",
                  });
                  setDocument(null);
                  setReference("");
                  setMessage("");
                }}
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Clear Form
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Submit Application
                <span>→</span>
              </button>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Prototype only. No official RTI application is filed and
              no government fee is collected by this demo.
            </p>
          </section>
        </form>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Rti