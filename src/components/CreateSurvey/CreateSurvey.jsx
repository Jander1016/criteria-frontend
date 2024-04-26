import React, { useState } from 'react';
import './CreateSurvey.css';
import styled from 'styled-components'; // Importa styled-components

const StyledSelect = styled.select`
  margin-bottom: 20px; /* Agrega un margen inferior para separar el select del calendario */
  display: ${({ hide }) => (hide ? 'none' : 'block')}; /* Oculta el select si hide es true */
`;

const CreateSurvey = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [evaluationType, setEvaluationType] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleEvaluationTypeChange = (e) => {
    setEvaluationType(e.target.value);
  };

  return (
    <div className="create-survey-container">
      <div className="survey-section">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Inserte título de la encuesta"
        />
      </div>
      <div className="survey-section">
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Inserte descripción de la encuesta"
        />
      </div>
      
      <div className="survey-section">
        <p style={{ fontSize: "10px" }}>Fecha límite para realizar la encuesta:</p>
        <input
          type="date"
          value={deadline}
          onChange={handleDeadlineChange}
        />
      </div>
    </div>
  );
};

export default CreateSurvey;
