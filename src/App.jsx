import { Route, Routes } from 'react-router-dom'
import './App.css'
import CitizenLogin from './Pages/CitizenLogin'
import CitizenRegistration from './Pages/CitizenRegistration'
import Otp from './Components/Otp'
import DashBoard from './Pages/DashBoard'
import UserDashboard from './AuthorizedPages/UserDashboard'
import Complaint from './AuthorizedPages/Complaint'
import ComplaintStatus from './AuthorizedPages/ComplaintStatus'
import Rti from './AuthorizedPages/Rti'
import ChatBot from './AuthorizedComponents/ChatBot'
import UserProfile from './AuthorizedPages/UserProfile'
import FindSchemes from './AuthorizedPages/FindSchemes'


function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<CitizenLogin/>}/>
      <Route path='/registration' element={<CitizenRegistration/>}/>
      <Route path='/otp' element={<Otp />}/>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/user/:id' element={<UserDashboard/>}/>
      <Route path='/user/complaint/:id' element={<Complaint/>}/>
      <Route path='/user/complaint-status/:id' element={<ComplaintStatus/>}/>
      <Route path='/user/rti/:id' element={<Rti/>}/>
      <Route path='/user/profile/:id' element={<UserProfile/>}/>
      <Route path='/user/find-scheme/:id' element={<FindSchemes/>}/>
    </Routes>
    <ChatBot/>
    </>
  )
}

export default App
