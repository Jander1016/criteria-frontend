import { ReactNode, createContext, useState } from "react";
import { User, AuthUser } from "../interfaces/UsersInterface.ts";
import authService from "../services/AuthService.ts";

interface AuthContextProps {
    user: User | null;
    logInUser: (data: AuthUser) => Promise<User|undefined>;
    logOutUser: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    user: {} as User,
    logInUser: async () => undefined,
    logOutUser: () => {}
  });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const logInUser = async (data: AuthUser) => {
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
