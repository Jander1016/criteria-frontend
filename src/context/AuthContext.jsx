import { createContext, useState } from "react";
import authService from "../services/AuthService.ts";

export const AuthContext = createContext({
    logInUser: async () => undefined,
    logOutUser: () => {}
  });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logInUser = async (data) => {
        const result = await authService.loginUser(data);
        if (result.data) {
            if (result.data.token) {
                localStorage.setItem('authToken', result.data.token);
                setUser(result.data);  
            }              
        }
        return result.data;        
    }

    const logOutUser = () => {
        localStorage.removeItem("authToken");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, logInUser, logOutUser }}>
            {children}
        </ AuthContext.Provider>
    )
}