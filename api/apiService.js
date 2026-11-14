import axiosService from "./axiosService"

export const registerUser=async(userData)=>{
    return axiosService("POST",'/register',userData)
}

//Validate OTP
export const validateOTPAPI=async(otp,email)=>{
    return axiosService("POST",'/validate-otp',{otp,email})
}

//Get all Officers Data
export const getAllOfficerDataAPI=async()=>{
    return axiosService("GET",'/get-officer-data',{})
}

//Login User
export const loginUserAPI=async(userData)=>{
    return axiosService("POST",'/login',userData)
}

//Get Office details from GEMINI API
export const getOfficeDetailsAPI=async(officeData)=>{
    return axiosService("POST",'/get-office-data',officeData)
}

//Get Office details from GEMINI API
export const requestRtiAPI=async(rtiData)=>{
    return axiosService("POST",'/rti-request',rtiData)
}

//Edit user data
export const editUserDataAPI=async(id,data)=>{
    return await axiosService("PUT",`/update-user/${id}`,data)
}

//Find Schemes
export const findSchemesAPI=async(data)=>{
    return await axiosService("POST",`/find-scheme`,data)
}

//register Complaint
export const registerComplaintAPI=async(complaintData)=>{
    return await axiosService("POST",'/register-complaint',complaintData)
}

//Get complaint History
export const getComplaintHistory=async(email)=>{
    return await axiosService("POST",'/complaint-list',{email})
}

//Get all Complaint Data
export const getAllComplaintsAPI=async()=>{
    return await axiosService("GET",'/get-complaints',{})
}

//Update Complaint Data
export const updateComplaintsAPI=async(id,status)=>{
    return await axiosService("PUT",`/update-complaints/${id}`,{status})
}

//Get all RTI Data
export const getAllRTIAPI=async()=>{
    return await axiosService("GET",'/get-RTI',{})
}