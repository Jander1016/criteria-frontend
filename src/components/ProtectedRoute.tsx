//esta ruta es protegida, valida si el user esta autenticado que muestre el contendo de esa ruta, sino le redirija para qu se autentifique

import { Outlet, Navigate } from "react-router-dom";
//import { useState} from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";

export default function ProtectedRoute(){
    const { user } = useContext(AuthContext);//aqui he usado un hook que he creado en AuthProvider.tsx y el valor x defecto es false en la linea 14 de AuthProvider.tsx
    
    console.log("User: " + JSON.stringify(user));
    return user ? <Outlet /> : <Navigate to="/" />  
    } 