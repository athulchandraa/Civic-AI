import React from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'
import { useEffect, useState } from "react";

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

function UserProfile() {

    const [isEditing, setIsEditing] = useState(false);

     const [profile, setProfile] = useState({
    fullName: "Athul C",
    phone: "9876543210",
    email: "athul@example.com",
    gender: "Male",
    dob: "2002-05-15",
    localBody: "Mannanchery Panchayat",
    taluk: "Ambalappuzha",
    district: "Alappuzha",
    annualIncome: "72000",
  });

  const [formData, setFormData] = useState(profile);

  const handleEdit = () => {
    setFormData({ ...profile });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...formData, email: profile.email });
    setIsEditing(false);
  };

  const fields = [
    { label: "Full Name", name: "fullName" },
    { label: "Phone Number", name: "phone" },
    { label: "Gender", name: "gender" },
    { label: "Date of Birth", name: "dob" },
    { label: "Panchayat / Municipality / Corporation", name: "localBody" },
    { label: "Taluk", name: "taluk" },
    { label: "Annual Family Income (₹)", name: "annualIncome" },
  ];

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <div className='flex'>
      <SideBar data={'File a Complaint'}/>
      <div className='w-full ml-65'>
        <Header/>
        <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Citizen Corner
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              My Profile
            </h1>
            <p className="mt-2 text-slate-500">
              View and manage your registered information.
            </p>
          </div>

          <button
            onClick={handleEdit}
            className="flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-800"
          >
            <span>✎</span> Edit Profile
          </button>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="flex items-center gap-4 bg-gradient-to-r from-green-900 to-green-500 p-6 text-white sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-2xl font-bold">
              {profile.fullName.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                {profile.fullName}
              </h2>
              <p className="mt-1 text-sm text-blue-100">
                Registered Citizen
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <h3 className="mb-6 text-lg font-semibold text-slate-900">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name}>
                  <p className="mb-2 text-sm font-medium text-slate-500">
                    {field.label}
                  </p>
                  <p className="break-words rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                    {profile[field.name] || "Not provided"}
                  </p>
                </div>
              ))}

              <div>
                <p className="mb-2 text-sm font-medium text-slate-500">
                  Email Address
                </p>
                <p className="break-words rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  {profile.email}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Email address cannot be changed.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-slate-500">
                  District
                </p>
                <p className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  {profile.district || "Not provided"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {isEditing && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsEditing(false);
              }
            }}
          >
            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

              <div className="sticky top-0 flex items-center justify-between border-b bg-white p-5 sm:p-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Edit Profile
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Update your personal details.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  aria-label="Close edit profile"
                  className="rounded-lg px-3 py-1 text-2xl text-slate-500 hover:bg-slate-100"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleSave} className="p-5 sm:p-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className={`${inputClass} mt-2`}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`${inputClass} mt-2`}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      readOnly
                      className={`${inputClass} mt-2 cursor-not-allowed bg-slate-100 text-slate-500`}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className={`${inputClass} mt-2`}
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      max={new Date().toISOString().split("T")[0]}
                      className={`${inputClass} mt-2`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-slate-700">
                      Panchayat / Municipality / Corporation
                    </label>
                    <input
                      name="localBody"
                      value={formData.localBody}
                      onChange={handleChange}
                      required
                      className={`${inputClass} mt-2`}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Taluk
                    </label>
                    <input
                      name="taluk"
                      value={formData.taluk}
                      onChange={handleChange}
                      required
                      className={`${inputClass} mt-2`}
                    />
                  </div>

                  {/* Kerala District Dropdown */}
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      District
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                      className={`${inputClass} mt-2`}
                    >
                      <option value="">Select district</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-slate-700">
                      Annual Family Income (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      required
                      className={`${inputClass} mt-2`}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap justify-end gap-3 border-t pt-5">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded-xl bg-green-700 px-6 py-3 font-medium text-white hover:bg-green-800"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
      </div>
    </div>
  )
}

export default UserProfile