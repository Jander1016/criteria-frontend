import React, { useState } from 'react';
import './EmployeesList.css'; // Estilos CSS
import { IoIosAddCircleOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import EmployeeDetailsPopup from './EmployeeDetailsPopup';
import CreateEmployees from './CreateEmployees'; // Importar el componente CreateEmployees

// Datos de empleados...
const employeesData = [
  {
    id: 1,
    name: 'Técnica de administración, finanzas y calidad',
    position: 'Técnica',
    departmentId: 1,
    directorId: 1,
    responsableId: 1,
    location: 'Madrid'
  },
  {
    id: 2,
    name: 'Auxiliar administrativa-recepcionista',
    position: 'Auxiliar',
    departmentId: 1,
    directorId: 1,
    responsableId: 1,
    location: 'Barcelona'
  },
  {
    id: 3,
    name: 'Auxiliar administrativa-recepcionista',
    position: 'Auxiliar',
    departmentId: 1,
    directorId: 1,
    responsableId: 1,
    location: 'Remoto'
  },
  {
    id: 4,
    name: 'Responsable de Políticas Laborales',
    position: 'Responsable',
    departmentId: 2,
    directorId: 2,
    responsableId: 2,
    location: 'Madrid'
  },
  {
    id: 5,
    name: 'Técnica de Personas y gestión del Talento',
    position: 'Técnica',
    departmentId: 2,
    directorId: 2,
    responsableId: 2,
    location: 'Barcelona'
  },
  {
    id: 6,
    name: 'Responsable de Grandes Cuentas',
    position: 'Responsable',
    departmentId: 3,
    directorId: 3,
    responsableId: 3,
    location: 'Madrid'
  },
  {
    id: 7,
    name: 'Soporte Administrativo Comercial',
    position: 'Soporte',
    departmentId: 3,
    directorId: 3,
    responsableId: 3,
    location: 'Barcelona'
  },


// Empleados bajo el responsable de Dirección de Administración, Finanzas y Calidad
{ id: 1, name: 'Técnica de administración, finanzas y calidad', position: 'Técnica', departmentId: 1, directorId: 1, responsableId: 1, location: 'Madrid' },
{ id: 2, name: 'Auxiliar administrativa-recepcionista', position: 'Auxiliar', departmentId: 1, directorId: 1, responsableId: 1, location: 'Barcelona' },
{ id: 3, name: 'Auxiliar administrativa-recepcionista', position: 'Auxiliar', departmentId: 1, directorId: 1, responsableId: 1, location: 'Remoto' },

// Empleados bajo el responsable de Dirección de Personas y Gestión del Talento
{ id: 4, name: 'Responsable de Políticas Laborales', position: 'Responsable', departmentId: 2, directorId: 2, responsableId: 2, location: 'Madrid' },
{ id: 5, name: 'Técnica de Personas y gestión del Talento', position: 'Técnica', departmentId: 2, directorId: 2, responsableId: 2, location: 'Barcelona' },

// Empleados bajo el responsable de Dirección Comercial
{ id: 6, name: 'Responsable de Grandes Cuentas', position: 'Responsable', departmentId: 3, directorId: 3, responsableId: 3, location: 'Madrid' },
{ id: 7, name: 'Soporte Administrativo Comercial', position: 'Soporte', departmentId: 3, directorId: 3, responsableId: 3, location: 'Barcelona' },

// Continuar con los empleados bajo otros responsables...
];

// Datos de departamentos, direcciones y responsables...
const departments = [
  { id: 1, name: 'Departamento de Administración, Finanzas y Calidad' },
  { id: 2, name: 'Departamento de Personas y Gestión del Talento' },
  { id: 3, name: 'Departamento Comercial' },
  { id: 4, name: 'Departamento de Consultoría de Recursos Humanos e Igualdad' },
  { id: 5, name: 'Departamento Giros' },
  { id: 6, name: 'Departamento de Formación' },
  { id: 7, name: 'Departamento de Comunicación y Marketing' },
  // Otros departamentos...
];

const directors = [
  { id: 1, name: 'Dirección de Administración, Finanzas y Calidad' },
  { id: 2, name: 'Dirección de Personas y Gestión del Talento' },
  { id: 3, name: 'Dirección Comercial' },
  { id: 4, name: 'Dirección de Consultoría de Recursos Humanos e Igualdad' },
  { id: 5, name: 'Dirección de Área Técnica Giros' },
  { id: 6, name: 'Dirección de Área Técnica de Formación' },
  { id: 7, name: 'Dirección departamento de Comunicación y Marketing' },
  // Otros directores...
];

const responsables = [
  { id: 1, name: 'Responsable de Dirección de Administración, Finanzas y Calidad' },
  { id: 2, name: 'Responsable de Dirección de Personas y Gestión del Talento' },
  { id: 3, name: 'Responsable de Dirección Comercial' },
  { id: 4, name: 'Responsable de Dirección de Consultoría de Recursos Humanos e Igualdad' },
  { id: 5, name: 'Responsable de Desarrollo de negocio' },
  { id: 6, name: 'Responsable de Formación y bonificada' },
  { id: 7, name: 'Responsable de Plataformas, E-learning y Factoría de contenidos' },
  // Otros responsables...
];

const EmployeesList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [selectedResponsable, setSelectedResponsable] = useState(null);
  const [showCreateEmployeeForm, setShowCreateEmployeeForm] = useState(false); // Nuevo estado para controlar la visibilidad del formulario

  const openPopup = (employee) => {
    setSelectedEmployee(employee);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
    setSelectedDirector(null);
    setSelectedResponsable(null);
  };

  const handleDirectorChange = (e) => {
    setSelectedDirector(e.target.value);
    setSelectedResponsable(null);
  };

  const handleResponsableChange = (e) => {
    setSelectedResponsable(e.target.value);
  };

  const filteredEmployees = employeesData.filter((employee) => {
    if (selectedDepartment && employee.departmentId !== selectedDepartment) {
      return false;
    }
    if (selectedDirector && employee.directorId !== selectedDirector) {
      return false;
    }
    if (selectedResponsable && employee.responsableId !== selectedResponsable) {
      return false;
    }
    return true;
  });

  const handleAddEmployeeClick = () => {
    setShowCreateEmployeeForm(true);
  };
  
  const handleClose = () => {
    setShowCreateEmployeeForm(false); // Aquí cerramos el formulario
  };
  
  return (
    <div className="employees-list">
      {/* Botón para agregar un nuevo empleado */}
      <button onClick={handleAddEmployeeClick}>Agregar Empleado</button>

      {/* Filtros */}
      <select value={selectedDepartment} onChange={handleDepartmentChange}>
        <option value="">Todos los departamentos</option>
        {departments.map((department) => (
          <option key={department.id} value={department.id}>{department.name}</option>
        ))}
      </select>
      <select value={selectedDirector} onChange={handleDirectorChange}>
        <option value="">Todos los directores</option>
        {directors.map((director) => (
          <option key={director.id} value={director.id}>{director.name}</option>
        ))}
      </select>
      <select value={selectedResponsable} onChange={handleResponsableChange}>
        <option value="">Todos los responsables</option>
        {responsables.map((responsable) => (
          <option key={responsable.id} value={responsable.id}>{responsable.name}</option>
        ))}
      </select>

      {/* Lista de empleados */}
      {filteredEmployees.map((employee) => (
        <div key={employee.id} className="employee">
          <div className="employee-avatar">
            <img src={`https://via.placeholder.com/50?text=${employee.name}`} alt="Employee Avatar" />
          </div>
          <div className="employee-details">
            <h3>{employee.name}</h3>
            <p>{employee.position}</p>
            <p>{employee.location}</p>
          </div>
          <div className="employee-actions">
            <select>
              {/* Opciones de encuestas */}
              <option value="encuesta1">Encuesta 1</option>
              <option value="encuesta2">Encuesta 2</option>
              {/* Otras encuestas */}
            </select>
            <div className="add-survey-icon" title="Add Survey">
              <IoIosAddCircleOutline />
            </div>
            <div className="details-icon" title="Details" onClick={() => openPopup(employee)}>
              <CgDetailsMore />
            </div>
          </div>
        </div>
      ))}

      {/* Mostrar el formulario de creación de empleados si showCreateEmployeeForm es true */}
      {showCreateEmployeeForm && <CreateEmployees onEmployeeAdd={(employee) => { /* Lógica para agregar el nuevo empleado */ }} onClose={handleClose} />}
      
      {/* Mostrar el componente EmployeeDetailsPopup cuando showPopup es true */}
      {showPopup && <EmployeeDetailsPopup employee={selectedEmployee} onClose={closePopup} />}
    </div>
  );
};

export default EmployeesList;
