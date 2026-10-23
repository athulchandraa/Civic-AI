import React from 'react'
import Header from '../Components/Header'
import { FaClock, FaFileAlt, FaResolving } from 'react-icons/fa'
import { FaGear, FaUpDown } from 'react-icons/fa6'
import SideBar from '../AuthorizedPages/SideBar'
import { Link } from 'react-router-dom'
Link


const services = [
  {
    title: "File a Complaint",
    description: "Report public issues to the concerned authorities.",
    icon: "file-text",
    path: "/user/complaint/:id",
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Complaint Status",
    description: "Track your complaints and follow their progress.",
    icon: "clipboard-check",
    path: "/user/complaint-status/:id",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Know a Program",
    description: "Explore government schemes and citizen benefits.",
    icon: "landmark",
    path: "/programs",
    color: "bg-violet-50 text-violet-700",
  },
  {
    title: "RTI Application",
    description: "Request information from public authorities.",
    icon: "file-search",
    path: "/user/rti/:id",
    color: "bg-amber-50 text-amber-700",
  },
];

function ServiceIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-7 w-7",
    viewBox: "0 0 24 24",
  };

  const paths = {
    "file-text": (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </>
    ),
    "clipboard-check": (
      <>
        <rect x="5" y="4" width="14" height="18" rx="2" />
        <path d="M9 4V2h6v2M8 13l3 3 5-6" />
      </>
    ),
    landmark: (
      <>
        <path d="m3 9 9-6 9 6M4 21h16M6 9v9M10 9v9M14 9v9M18 9v9M3 18h18" />
      </>
    ),
    "file-search": (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
        <path d="M14 2v6h6M14 2l6 6" />
        <circle cx="16" cy="16" r="3" />
        <path d="m18.2 18.2 2 2" />
      </>
    ),
  };

  return <svg {...common}>{paths[type]}</svg>;
}


function UserDashboard() {

  return (
    <div className='flex'>
    <SideBar/>
    <div className='w-full ml-65'>
        <Header/>
        <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Welcome section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[45px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-32 right-48 h-72 w-72 rounded-full border-[45px] border-white/5" />

          <div className="relative max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-blue-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              YOUR DIGITAL CITIZEN PORTAL
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Welcome to Civic AI
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Your single platform to access public services, raise
              concerns, discover government schemes and exercise your
              right to information.
            </p>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/file-complaint"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
              >
                Get Started <span>→</span>
              </Link>

              <Link
                to="/programs"
                className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div> */}
          </div>
        </section>

        {/* Services */}
        <section className="mt-12">
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              Citizen Services
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How can we help you?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Choose a service below to get started with your
              government-related needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}
                  >
                    <ServiceIcon type={service.icon} />
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-300 transition group-hover:bg-blue-50 group-hover:text-blue-700">
                    ↗
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <span className="text-sm font-semibold text-blue-700">
                    Open service →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom information banner */}
        <section className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
              >
                <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="font-bold text-slate-900">
                Transparent. Accessible. Citizen-first.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Civics AI helps citizens navigate public services
                through one simple interface.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
    </div>
    </div>
  )
}

export default UserDashboard