import axios from "axios";

const axiosInstace=axios.create({
    baseURL:" https://civic-ai-backend-95du.onrender.com/"
},5000)




//Request Interceptors : Handling Token append to Headers
axiosInstace.interceptors.request.use(
    (config)=>{
        const token=sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

//Global error Handling

axios.interceptors.response.use(
    (response)=>{
        console.log("Response Recieved");
        return response
    },
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("Unauthorized user");
            }else if(status==404){
                console.log(" API not found");
            }else if(status==500){
                console.log(" Something went Wrong");
            }else if(error.request){
                console.log("No response from server");
            }else{
                console.log("Error: " +error.message);
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstace