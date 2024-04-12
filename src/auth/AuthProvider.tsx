import { useContext, createContext, useState } from "react";

interface AuthProviderProps {  
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
    //signIn: () => {},
    //signOut: () => {},
});

export function AuthProvider({children}: AuthProviderProps) {
    const [isAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);