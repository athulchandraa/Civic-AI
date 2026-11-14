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
import { Toaster } from 'react-hot-toast'
import RtiReceipt from './AuthorizedPages/RtiReceipt'
import ChatbotWidget from './AuthorizedComponents/ChatbotWidget'
import UserLayout from './UserLayout'
import AdminLayout from './Admin/AdminLayout'
import AdminDashboard from './Admin/AdminDashboard'
import ComplaintView from './Admin/ComplaintView'
import OfficerManagement from './Admin/OfficerManagement'
import RtiManagement from './Admin/RtiManagement'






function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<CitizenLogin/>}/>
      <Route path='/registration' element={<CitizenRegistration/>}/>
      <Route path='/otp' element={<Otp />}/>
      <Route path='/' element={<DashBoard/>}/>


        
        <Route path='/user' element={<UserLayout/>}>
          <Route index element={<UserDashboard/>}/>
          <Route path='complaint' element={<Complaint/>}/>
          <Route path='complaint-status' element={<ComplaintStatus/>}/>
          <Route path='rti' element={<Rti/>}/>
          <Route path='profile' element={<UserProfile/>}/>
          <Route path='find-scheme' element={<FindSchemes/>}/>
        </Route>
  
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin/complaint-view' element={<ComplaintView/>}/>
        <Route path='/admin/officer-management' element={<OfficerManagement/>}/>
        <Route path='/admin/rti-management' element={<RtiManagement />}/>
      

      <Route path='/rti-reciept' element={<RtiReceipt/>}/>

    </Routes>
    <Toaster
    position="top-right"
    reverseOrder={false}
  />
    </>
  )
}

export default App
