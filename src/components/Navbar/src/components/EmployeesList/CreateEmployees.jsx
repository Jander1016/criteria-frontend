// CreateEmployees.jsx

import React, { useState } from 'react';
import './CreateEmployees.css';


const CreateEmployees = ({ onEmployeeAdd, onClose }) => { // Agrega la prop onClose
  const [newEmployee, setNewEmployee] = useState({
    id: '', // El ID se asignará automáticamente
    name: '',
    position: '',
    departmentId: '',
    directorId: '',
    responsableId: '',
    location: '',
  });

  const handleAddEmployee = () => {
    // Validar los datos del nuevo empleado aquí
    // Asignar un ID único al nuevo empleado
    const id = generateUniqueId();
    const employeeWithId = { ...newEmployee, id };

    // Llamar a la función de agregar empleado
    onEmployeeAdd(employeeWithId);

    // Limpiar el formulario después de agregar el empleado
    setNewEmployee({
      id: '',
      name: '',
      position: '',
      departmentId: '',
      directorId: '',
      responsableId: '',
      location: '',
    });

    // Cerrar el formulario de creación de empleados
    onClose();
  };

  // Función para generar un ID único (simulación)
  const generateUniqueId = () => {
    // Simplemente devuelve un timestamp como ID único para este ejemplo
    return Date.now().toString();
  };

  return (
    <div className="add-employee-section">
      <h3>Agregar Nuevo Empleado</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={newEmployee.name}
        onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Posición"
        value={newEmployee.position}
        onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
      />
      <select
        value={newEmployee.departmentId}
        onChange={(e) => setNewEmployee({ ...newEmployee, departmentId: e.target.value })}
      >
        <option value="">Seleccione un departamento</option>
        {/* Opciones de departamentos */}
      </select>
      <select
        value={newEmployee.directorId}
        onChange={(e) => setNewEmployee({ ...newEmployee, directorId: e.target.value })}
      >
        <option value="">Seleccione un director</option>
        {/* Opciones de directores */}
      </select>
      <select
        value={newEmployee.responsableId}
        onChange={(e) => setNewEmployee({ ...newEmployee, responsableId: e.target.value })}
      >
        <option value="">Seleccione un responsable</option>
        {/* Opciones de responsables */}
      </select>
      <select
        value={newEmployee.location}
        onChange={(e) => setNewEmployee({ ...newEmployee, location: e.target.value })}
      >
        <option value="">Seleccione una ubicación</option>
        {/* Opciones de ubicaciones */}
      </select>
      <button onClick={handleAddEmployee}>Agregar Empleado</button>
    </div>
  );
};

export default CreateEmployees;
