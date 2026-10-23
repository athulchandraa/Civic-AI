import React from 'react'
import SideBar from './SideBar'
import Header from '../Components/Header'

function ComplaintStatus() {
  return (
    <div className='flex'>
      <SideBar data={'File a Complaint'}/>
      <div className='w-full ml-65'>
        <Header/>
        <div className='p-3'>
          Complaint Status
        </div>
      </div>
    </div>
  )
}

export default ComplaintStatus