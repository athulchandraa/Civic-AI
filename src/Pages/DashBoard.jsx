import { FiArrowDownRight, FiArrowUpRight, FiMapPin, FiShield } from 'react-icons/fi'
import DistrictInfoPanel from '../Components/DistrictInfoPanel'
import KeralaDistrictMap from '../Components/KeralaDistrictMap'
import { useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const leadership = [
  {
    name: 'V. D. Satheesan',
    title: 'Chief Minister of Kerala',
    image: '/officials/chief-minister.png',
    imageAlt: 'Official portrait of Kerala Chief Minister V. D. Satheesan',
    source: 'https://keralacm.gov.in/',
    sourceLabel: 'Chief Minister’s Office',
    accent: 'bg-[#e7f1e9]',
  },
  {
    name: 'Om Prakash Mathur',
    title: 'Governor of Kerala',
    image: '/officials/governor.jpg',
    imageAlt: 'Official portrait of Kerala Governor Rajendra Vishwanath Arlekar',
    source: 'https://lokbhavan.kerala.gov.in/',
    sourceLabel: 'Kerala Lok Bhavan',
    accent: 'bg-[#f5eee3]',
  },
]

function LeadershipCard({ person }) {
  return (
    <article className="flex min-w-0 items-center gap-4 rounded-2xl border border-[#e7ece8] bg-white p-4 shadow-[0_8px_24px_rgba(20,55,39,0.05)] sm:p-5">
      <img
        className={`h-[92px] w-[78px] shrink-0 rounded-xl object-cover object-top ${person.accent}`}
        src={person.image}
        alt={person.imageAlt}
      />
      <div className="min-w-0">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.17em] text-[#7c8b82]">
          {person.title}
        </p>
        <h2 className="text-base font-semibold leading-snug text-[#1d3529] sm:text-lg">
          {person.name}
        </h2>
        <a
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#276348] transition-colors hover:text-[#a66a27]"
          href={person.source}
          target="_blank"
          rel="noreferrer"
        >
          {person.sourceLabel}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

function DashBoard() {
  const [selectedDistrict, setSelectedDistrict] = useState('Thiruvananthapuram')
  const [hoveredDistrict, setHoveredDistrict] = useState(null)
  const displayedDistrict = hoveredDistrict ?? selectedDistrict

  return (
    <div className="min-h-screen bg-[#f6f8f5] text-[#23352b]">
      <header className="border-b border-[#e8ede9] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <a className="flex min-w-0 items-center gap-3" href="#top" aria-label="Civic AI home">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#174a3b] text-white shadow-sm">
              <FiShield aria-hidden="true" className="text-xl" />
            </span>
            <span className="min-w-0">
              <span className="block text-base font-bold tracking-tight text-[#174a3b]">Civic AI</span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.13em] text-[#718078] sm:block">
                Public Governance Transparency System
              </span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full bg-[#f1f6f2] px-3 py-2 text-xs font-medium text-[#53675a] sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#4c9468]" />
              Citizen Login
            </span>
            <a
              href="#districts"
              className="inline-flex items-center gap-2 rounded-xl bg-[#174a3b] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#21634d]"
            >
              Explore districts
              <FiArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1440px] px-5 pb-16 pt-7 sm:px-8 sm:pt-10 lg:px-12">
        <section
          id="welcome"
          aria-labelledby="welcome-title"
          className="relative overflow-hidden rounded-[28px] border border-[#e1ebe2] bg-[#edf4ee] p-5 sm:p-8 lg:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border-[1px] border-[#dce8dc] sm:-right-4 sm:-top-36 sm:h-[420px] sm:w-[420px]"
          />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
            <div className="max-w-xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7e6da] bg-white/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3e7252]">
                <FiMapPin aria-hidden="true" />
                Kerala · India
              </p>
              <h1
                id="welcome-title"
                className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#173d2c] sm:text-5xl lg:text-[56px]"
              >
                Welcome to
                <br />
                Kerala<span className="text-[#b07831]">.</span>
              </h1>
              <p className="mt-5 max-w-[570px] text-sm leading-7 text-[#53685b] sm:text-base">
                Set along India’s southwestern Malabar Coast between the Arabian Sea and the
                Western Ghats, Kerala brings together 14 districts, rich cultural and linguistic
                traditions, and one of India’s highest literacy levels. Its elected state
                government and local self-government institutions deliver public services and
                support accountable, people-centred administration.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#d6e4d7] bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#42634c]">
                  14 districts
                </span>
                <span className="rounded-full border border-[#d6e4d7] bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#42634c]">
                  Arabian Sea coast
                </span>
                <span className="rounded-full border border-[#d6e4d7] bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#42634c]">
                  People-first governance
                </span>
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-3 flex items-center justify-between gap-3 px-1">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6d8073]">
                    State leadership
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#385243]">
                    Verified profiles from official sources
                  </p>
                </div>
                <span className="hidden h-px flex-1 bg-[#d9e5db] sm:block" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {leadership.map((person) => (
                  <LeadershipCard key={person.title} person={person} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="districts" aria-labelledby="districts-title" className="mt-12 scroll-mt-6 sm:mt-16">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6a36]">
                Local governance explorer
              </p>
              <h2
                id="districts-title"
                className="font-serif text-3xl font-semibold tracking-tight text-[#1d392b] sm:text-4xl"
              >
                Explore Kerala by district
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6a786f]">
              Choose a district on the map to explore its administration and public-service
              information.
            </p>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(370px,0.95fr)]">
            <KeralaDistrictMap
              selectedDistrict={selectedDistrict}
              hoveredDistrict={hoveredDistrict}
              onSelectDistrict={setSelectedDistrict}
              onHoverDistrict={setHoveredDistrict}
            />
            {/* <DistrictInfoPanel
              district={displayedDistrict}
              // isPreview={Boolean(hoveredDistrict && hoveredDistrict !== selectedDistrict)}

              //Ivde aanu Duplication based on district varunnath

              
            /> */}
            <div className='rounded-lg shadow-lg px-3 py-1 bg-white'>
              {/* {selectedDistrict} */}
              <div className='px-3 py-1 flex items-center gap-5'>
                <div>
                 <p className='font-medium text-2xl'> {selectedDistrict}</p>
                 <p className='flex items-center gap-2 text-gray-600 text-sm'><FaLocationDot/>Keralam,India</p>
                </div>
                {/* Image Div */}
                <div className='relative h-20 w-full overflow-hidden rounded-xl'>
                  <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtquSkZgL_LPPewwBCriqLfvX-O2iu_8E9PSz0pPlR56mXhPhuhw5_4apI&s=10" alt="" />
                  {/* White Gradient */}
                  <div className='absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent'></div>
                </div>
              </div>
              {/* Officers Listing  */}
              <div className='grid grid-cols-3 gap-5 my-5 p-2'>
                {/* Duplicating... */}
                <div className='shadow p-2 flex justify-center'>
                  <div>
                    <div className='w-full flex justify-center'><img className='w-50 h-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsL1TzkAYujTI2ZunkcQsrB9h9rhuXUim0_R7_2Xsyg&s=10" alt="" /></div>
                    <div className='w-full text-center mt-3'>
                      <p className='font-medium'>Shaji V Nair IAS</p>
                      <p className='my-2'>District Collector & District Magistrate</p>
                      <Link className='bg-blue-200 px-3 py-1 rounded text-blue-800 font-medium'>View Profile</Link>
                    </div>
                  </div>
                 

                </div>
                {/* DPC */}
                <div className='shadow p-2 flex justify-center'>
                  <div>
                    <div className='w-full flex justify-center'><img className='w-50 h-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpry_ZAObX6TGJXwNunqQqxTp8C0pbzFVR1EH217uUpwZeC2KekQuTRs5&s=10" alt="" /></div>
                    <div className='w-full text-center mt-3'>
                      <p className='font-medium'>Vishnu Pratheep T.K. IPS</p>
                      <p className='my-2'>District Police Chief</p>
                      <Link className='bg-blue-200 px-3 py-1 rounded text-blue-800 font-medium'>View Profile</Link>
                    </div>
                  </div>
                </div>
                {/* DPC */}
                <div className='shadow p-2 flex justify-center'>
                  <div>
                    <div className='w-full flex justify-center'><img className='w-50 h-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpry_ZAObX6TGJXwNunqQqxTp8C0pbzFVR1EH217uUpwZeC2KekQuTRs5&s=10" alt="" /></div>
                    <div className='w-full text-center mt-3'>
                      <p className='font-medium'>Vishnu Pratheep T.K. IPS</p>
                      <p className='my-2'>District Police Chief</p>
                      <Link className='bg-blue-200 px-3 py-1 rounded text-blue-800 font-medium'>View Profile</Link>
                    </div>
                  </div>
                </div>
                {/* DPC */}
                <div className='shadow p-2 flex justify-center'>
                  <div>
                    <div className='w-full flex justify-center'><img className='w-50 h-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpry_ZAObX6TGJXwNunqQqxTp8C0pbzFVR1EH217uUpwZeC2KekQuTRs5&s=10" alt="" /></div>
                    <div className='w-full text-center mt-3'>
                      <p className='font-medium'>Vishnu Pratheep T.K. IPS</p>
                      <p className='my-2'>District Police Chief</p>
                      <Link className='bg-blue-200 px-3 py-1 rounded text-blue-800 font-medium'>View Profile</Link>
                    </div>
                  </div>
                </div>
                {/* DPC */}
                <div className='shadow p-2 flex justify-center'>
                  <div>
                    <div className='w-full flex justify-center'><img className='w-50 h-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpry_ZAObX6TGJXwNunqQqxTp8C0pbzFVR1EH217uUpwZeC2KekQuTRs5&s=10" alt="" /></div>
                    <div className='w-full text-center mt-3'>
                      <p className='font-medium'>Vishnu Pratheep T.K. IPS</p>
                      <p className='my-2'>District Police Chief</p>
                      <Link className='bg-blue-200 px-3 py-1 rounded text-blue-800 font-medium'>View Profile</Link>
                    </div>
                  </div>
                </div>
                {/* DPC */}
                <div className='shadow p-2 flex justify-center'>
                  <div>
                    <div className='w-full flex justify-center'><img className='w-50 h-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpry_ZAObX6TGJXwNunqQqxTp8C0pbzFVR1EH217uUpwZeC2KekQuTRs5&s=10" alt="" /></div>
                    <div className='w-full text-center mt-3'>
                      <p className='font-medium'>Vishnu Pratheep T.K. IPS</p>
                      <p className='my-2'>District Police Chief</p>
                      <Link className='bg-blue-200 px-3 py-1 rounded text-blue-800 font-medium'>View Profile</Link>
                    </div>
                  </div>
                </div>
                
                

              </div>
            </div>
            
          </div>
        </section>

        <footer className="mt-8 flex flex-col gap-2 border-t border-[#e4eae5] pt-5 text-xs leading-5 text-[#7b877f] sm:flex-row sm:items-center sm:justify-between">
          <p>Civic AI · Public Governance Transparency System</p>
          <p>
            District boundaries:{' '}
            <a
              className="font-medium text-[#55745f] underline decoration-[#b8c9ba] underline-offset-2 hover:text-[#174a3b]"
              href="https://www.geoboundaries.org/"
              target="_blank"
              rel="noreferrer"
            >
              geoBoundaries
            </a>
            {' '}· ODbL 1.0 · Pathways Data Pvt. Ltd. / LGDirectory
          </p>
        </footer>
      </main>
    </div>
  )
}

export default DashBoard
