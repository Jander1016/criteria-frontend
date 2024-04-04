import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Estadisticas } from "../pages/Estadisticas";
import { Empleados } from "../pages/Empleados";
import {Encuestas} from "../pages/Encuestas";
import {Reportes} from "../pages/Reportes";
export function MyRoutes() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/encuestas" element={<Encuestas />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    
  );
}
