import React, { useState } from 'react';
import './AreaEvaluation.css';
import styled from 'styled-components'; // Importa styled-components

const Container = styled.div`
  margin-top: 25px; /* Agrega un margen superior de 15px */
`;

const AreaEvaluation = () => {
  const [evaluationType, setEvaluationType] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleEvaluationTypeChange = (e) => {
    setEvaluationType(e.target.value);
    setSelectedArea(''); // Reiniciar el área seleccionada cuando se cambia el tipo de evaluación
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  return (
    <Container className="area-evaluation-container">
      <label>Tipo de evaluación:</label>
      <select value={evaluationType} onChange={handleEvaluationTypeChange}>
        <option value="">Seleccione una opción</option>
        <option value="performance">Evaluación del desempeño</option>
        <option value="satisfaction">Evaluación de Satisfacción del empleado</option>
      </select>
      {evaluationType === 'performance' && (
        <div className="area-options">
          <label>Seleccione un área:</label>
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value="">Seleccione una área</option>
            <option value="area1">Área 1 - Conocimiento del puesto</option>
            <option value="area2">Área 2 - Planificación y resolución</option>
            <option value="area3">Área 3 - Productividad</option>
            <option value="area4">Área 4 - Trabajo en equipo</option>
            <option value="area5">Área 5 - Habilidades de comunicación</option>
            <option value="area6">Área 6 - Habilidades de dirección</option>
          </select>
        </div>
      )}
      {evaluationType === 'satisfaction' && (
        <div className="area-options">
          <label>Seleccione un área:</label>
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value="">Seleccione una área</option>
            <option value="area1">Área 1 - Recomendación</option>
            <option value="area2">Área 2 - Superior inmediato</option>
            <option value="area3">Área 3 - Valoración de aspectos</option>
          </select>
        </div>
      )}
    </Container>
  );
};

export default AreaEvaluation;
