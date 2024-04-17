// EmployeeDetailsPopup.jsx
import React from 'react';

const EmployeeDetailsPopup = ({ employee, onClose }) => {
  return (
    <div className="popup">
      <h2>{employee.name}</h2>
      <p>Puesto: {employee.position}</p>
      <p>Departamento: {employee.department}</p>
      <div>
        <label htmlFor="surveys">Encuestas:</label>
        <select id="surveys" name="surveys">
          {employee.surveys.map((survey) => (
            <option key={survey.id}>{survey.name}</option>
          ))}
        </select>
      </div>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default EmployeeDetailsPopup;
