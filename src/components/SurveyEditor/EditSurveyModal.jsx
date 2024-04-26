import React, { useState } from 'react';

const EditSurveyModal = ({ evaluation, onSave, onCancel }) => {
  const [editedEvaluation, setEditedEvaluation] = useState(evaluation);

  const handleSave = () => {
    onSave(editedEvaluation);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <h2>Editar Encuesta</h2>
      <input
        type="text"
        value={editedEvaluation.title}
        onChange={(e) => setEditedEvaluation({ ...editedEvaluation, title: e.target.value })}
      />
      {editedEvaluation.questions.map((question, index) => (
        <div key={index}>
          <input
            type="text"
            value={question.text}
            onChange={(e) =>
              setEditedEvaluation({
                ...editedEvaluation,
                questions: [
                  ...editedEvaluation.questions.slice(0, index),
                  { ...question, text: e.target.value },
                  ...editedEvaluation.questions.slice(index + 1),
                ],
              })
            }
          />
          {/* Otros campos editables para preguntas */}
        </div>
      ))}
      <button onClick={handleSave}>Guardar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  );
};

export default EditSurveyModal;
