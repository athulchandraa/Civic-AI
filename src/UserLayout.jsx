import { Outlet } from "react-router-dom";
import ChatbotWidget from "./AuthorizedComponents/ChatbotWidget";

const UserLayout=()=>{
    return(
        <>
            <Outlet/>
            <ChatbotWidget/>
        </>
    )
}

export default UserLayout