import axios from "axios";
import { useEffect } from "react";
import useAuth from "./hook";
import { useNavigate } from "react-router-dom";

 const instanceAxios = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true,
 })

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {useLogOut} = useAuth()
    useEffect(()=>{
        instanceAxios.interceptors.response.use(response =>
           {
            return response;
           },
           error=>{
            console.log("error caught in interceptor",error);
            if(error.status ===401 || error.status ===403){
                console.log("use logout currently");
                useLogOut()
                .then(()=>{
                    console.log("user logged out successfully");
                    navigate("/singIn")
                })
                .catch(error =>{
                    console.log("ERROR",error.message)
                })
            }
            return Promise.reject(error);
           }
        )
    },[])
    return instanceAxios;
};

export default useAxiosSecure;