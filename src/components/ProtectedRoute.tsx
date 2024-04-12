//esta ruta es protegida, valida si el user esta autenticado que muestre el contendo de esa ruta, sino le redirija para qu se autentifique

import { Outlet, Navigate } from "react-router-dom";
//import { useState} from "react";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute(){
    const auth = useAuth(); //aqui he usado un hook que he creado en AuthProvider.tsx y el valor x defecto es false en la linea 14 de AuthProvider.tsx
    
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />  
    } 