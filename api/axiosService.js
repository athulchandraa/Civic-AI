import axiosInstace from "./axiosInstance";

const axiosService=async (httpMethod,url,reqBody)=>{
    try{
        const response=await axiosInstace({
            method:httpMethod,
            url,
            data:reqBody
        })
        return(response)
    }catch(err){
        throw(err)
    }
}

export default axiosService