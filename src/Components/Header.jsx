import React from 'react'
import { FiArrowDownRight, FiArrowRight, FiShield } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


function Header() {
  const Location=useNavigate()


  const openUserProfile=()=>{
    Location('/user/profile/:id')
  }

  return (
    <div>
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
                  {/* <div className="flex items-center gap-3">
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
                  </div> */}
                  <div>
                    <img onClick={()=>openUserProfile()} className='w-10 h-10 rounded-full' src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png" alt="" />
                    
                  </div>
                </div>
              </header>
    </div>
  )
}

export default Header