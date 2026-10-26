import React from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'
import { useState } from "react";






const schemes = [
  {
    id: 1,
    name: "Post-Matric Scholarship",
    category: "Education",
    description:
      "Financial assistance for eligible students pursuing education after matriculation.",
    benefit: "Scholarship assistance as per scheme rules",
    groups: ["SC", "ST", "OBC"],
    maxIncome: 250000,
    education: ["Plus Two", "Diploma", "Graduate", "Postgraduate"],
    url: "https://scholarships.gov.in/",
  },
  {
    id: 2,
    name: "National Scholarship Portal Schemes",
    category: "Education",
    description:
      "Explore central scholarship opportunities and their eligibility conditions.",
    benefit: "Varies by scholarship",
    groups: ["General", "OBC", "SC", "ST", "EWS"],
    maxIncome: 800000,
    education: ["Plus Two", "Diploma", "Graduate", "Postgraduate"],
    url: "https://scholarships.gov.in/",
  },
  {
    id: 3,
    name: "Employment and Skill Development",
    category: "Employment",
    description:
      "Explore skill training and employment services for eligible job seekers.",
    benefit: "Depends on the programme",
    groups: ["General", "OBC", "SC", "ST", "EWS"],
    maxIncome: Infinity,
    education: ["SSLC", "Plus Two", "Diploma", "Graduate", "Postgraduate"],
    url: "https://www.ncs.gov.in/",
  },
];

  const districts = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta",
  "Alappuzha", "Kottayam", "Idukki", "Ernakulam",
  "Thrissur", "Palakkad", "Malappuram", "Kozhikode",
  "Wayanad", "Kannur", "Kasaragod",
];


function FindSchemes() {

  const [filters, setFilters] = useState({
    age: "",
    district: "",
    gender: "",
    income: "",
    education: "",
    category: "",
    employment: "",
  });

  const [searched, setSearched] = useState(false);

  const updateFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredSchemes = schemes.filter((scheme) => {
    const incomeMatches =
      filters.income === "" ||
      Number(filters.income) <= scheme.maxIncome;

    const categoryMatches =
      filters.category === "" ||
      scheme.groups.includes(filters.category);

    const educationMatches =
      filters.education === "" ||
      scheme.education.includes(filters.education);

    return incomeMatches && categoryMatches && educationMatches;
  });

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100";


    console.log(filters);
    

  return (
    <div>
      <SideBar/>
      <div className='ml-65'>
        <Header/>
        <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Citizen Corner
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Find Government Schemes
          </h1>
          <p className="mt-2 text-slate-500">
            Enter your details to explore programmes that may suit you.
          </p>
        </div>

        {/* User Details */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-semibold text-slate-900">
            Your Details
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Provide details to find potentially relevant schemes.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div>
              <label className="text-sm font-medium text-slate-700">
                Age
              </label>
              <input
                type="number"
                name="age"
                min="0"
                max="120"
                value={filters.age}
                onChange={updateFilter}
                placeholder="Enter your age"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                District
              </label>
              <select
                name="district"
                value={filters.district}
                onChange={updateFilter}
                className={inputClass}
              >
                <option value="">Select district</option>
                {districts.map((district) => (
                  <option key={district}>{district}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Gender
              </label>
              <select
                name="gender"
                value={filters.gender}
                onChange={updateFilter}
                className={inputClass}
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Annual Family Income (₹)
              </label>
              <input
                type="number"
                name="income"
                min="0"
                value={filters.income}
                onChange={updateFilter}
                placeholder="e.g. 150000"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Education
              </label>
              <select
                name="education"
                value={filters.education}
                onChange={updateFilter}
                className={inputClass}
              >
                <option value="">Select education</option>
                <option>SSLC</option>
                <option>Plus Two</option>
                <option>Diploma</option>
                <option>Graduate</option>
                <option>Postgraduate</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                name="category"
                value={filters.category}
                onChange={updateFilter}
                className={inputClass}
              >
                <option value="">Select category</option>
                <option>General</option>
                <option>EWS</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
              </select>
            </div>

            <div className="sm:col-span-2 lg:col-span-3">
              <label className="text-sm font-medium text-slate-700">
                Employment Status
              </label>
              <select
                name="employment"
                value={filters.employment}
                onChange={updateFilter}
                className={inputClass}
              >
                <option value="">Select employment status</option>
                <option>Student</option>
                <option>Employed</option>
                <option>Unemployed</option>
                <option>Self-employed</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setSearched(true)}
              className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Find Schemes
            </button>

            <button
              onClick={() => {
                setFilters({
                  age: "",
                  district: "",
                  gender: "",
                  income: "",
                  education: "",
                  category: "",
                  employment: "",
                });
                setSearched(false);
              }}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recommended Schemes
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {searched
                  ? `${filteredSchemes.length} potential match(es) found`
                  : "Enter your details and select Find Schemes."}
              </p>
            </div>
          </div>

          {searched && filteredSchemes.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <p className="font-semibold text-slate-800">
                No matching demo schemes found
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Try changing your filters or check official scheme portals.
              </p>
            </div>
          )}

          {searched && filteredSchemes.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {filteredSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                      {scheme.category === "Education" ? "🎓" : "💼"}
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      {scheme.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {scheme.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {scheme.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Benefits
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-800">
                      {scheme.benefit}
                    </p>
                  </div>

                  <a
                    href={scheme.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-green-700 hover:text-green-900"
                  >
                    Visit Official Portal
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              ))}
            </div>
          )}

          <p className="mt-5 text-xs leading-5 text-slate-400">
            These are illustrative demo records, not confirmed eligibility
            decisions. Check the official portal for current schemes,
            eligibility rules, benefits and deadlines before applying.
          </p>
        </div>
      </div>
    </div>
      </div>
     
    </div>
  )
}

export default FindSchemes