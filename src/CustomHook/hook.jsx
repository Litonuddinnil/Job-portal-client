import { useContext } from "react";
import AuthContext from "../provider/AuthContext/AuthContext";

 
const useAuth = () => {
     const context = useContext(AuthContext);
     return context;
};

export default useAuth;