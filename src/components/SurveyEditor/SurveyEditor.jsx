import React, { useState } from 'react';
import './SurveyEditor.css';
import Modal from 'react-modal';

const SurveyEditor = () => {
  const [surveyTitle, setSurveyTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [evaluationAreas, setEvaluationAreas] = useState([
    'Área 1', 'Área 2', 'Área 3', 'Área 4', 'Área 5', 'Área 6',
  ]);
  const [answerTypes, setAnswerTypes] = useState(['Likert', 'Múltiple respuesta', 'Respuesta libre']);
  const [likertOptions, setLikertOptions] = useState([
    ['1', '2', '3', '4', '5'],
    ['En desacuerdo', 'Algo en desacuerdo', 'De acuerdo', 'NS/NC', 'Muy de acuerdo'],
  ]);

  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionEvaluationArea, setNewQuestionEvaluationArea] = useState('');
  const [newQuestionAnswerType, setNewQuestionAnswerType] = useState('');
  const [newQuestionLikertOptions, setNewQuestionLikertOptions] = useState(0);
  const [newQuestionMultipleChoiceOptions, setNewQuestionMultipleChoiceOptions] = useState(4);
  const [newQuestionFreeTextMaxLength, setNewQuestionFreeTextMaxLength] = useState(100);
  const [newEvaluationArea, setNewEvaluationArea] = useState('');
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isEvaluationListModalOpen, setIsEvaluationListModalOpen] = useState(false);
  const [evaluations, setEvaluations] = useState(
    JSON.parse(localStorage.getItem('evaluations')) || []
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSurveyTitleChange = (event) => {
    setSurveyTitle(event.target.value);
  };

  const handleAddQuestion = () => {
    if (newQuestionText && newQuestionEvaluationArea && newQuestionAnswerType) {
      setQuestions([
        ...questions,
        {
          text: newQuestionText,
          evaluationArea: newQuestionEvaluationArea,
          answerType: newQuestionAnswerType,
          likertOptions: likertOptions[newQuestionLikertOptions],
          multipleChoiceOptions: newQuestionMultipleChoiceOptions,
          freeTextMaxLength: newQuestionFreeTextMaxLength,
        },
      ]);
      setNewQuestionText('');
      setNewQuestionEvaluationArea('');
      setNewQuestionAnswerType('');
      setNewQuestionLikertOptions(0);
      setNewQuestionMultipleChoiceOptions(4);
      setNewQuestionFreeTextMaxLength(100);
    }
  };

  const handleQuestionTextChange = (event) => {
    setNewQuestionText(event.target.value);
  };

  const handleQuestionEvaluationAreaChange = (event) => {
    setNewQuestionEvaluationArea(event.target.value);
  };

  const handleQuestionAnswerTypeChange = (event) => {
    setNewQuestionAnswerType(event.target.value);
  };

  const handleQuestionLikertOptionsChange = (event) => {
    setNewQuestionLikertOptions(event.target.value);
  };

  const handleQuestionMultipleChoiceOptionsChange = (event) => {
    setNewQuestionMultipleChoiceOptions(parseInt(event.target.value));
  };

  const handleQuestionFreeTextMaxLengthChange = (event) => {
    setNewQuestionFreeTextMaxLength(parseInt(event.target.value));
  };

  const handleAddEvaluationArea = () => {
    if (newEvaluationArea.trim() !== '') {
      setEvaluationAreas([...evaluationAreas, newEvaluationArea.trim()]);
      setNewEvaluationArea('');
    }
  };

  const handlePreviewSurvey = () => {
    setIsPreviewModalOpen(true);
  };

  const handleClosePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  const handleAddSurvey = () => {
    // Guardar la encuesta en el listado de evaluaciones
    const newEvaluation = {
      title: surveyTitle,
      questions: questions,
    };
    setEvaluations([...evaluations, newEvaluation]);

    // Guardar los datos de la encuesta en localStorage
    localStorage.setItem('evaluations', JSON.stringify([...evaluations, newEvaluation]));

    // Mostrar mensaje de confirmación
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    // Limpiar los campos
    setSurveyTitle('');
    setQuestions([]);
    setNewQuestionText('');
    setNewQuestionEvaluationArea('');
    setNewQuestionAnswerType('');
    setNewQuestionLikertOptions(0);
    setNewQuestionMultipleChoiceOptions(4);
    setNewQuestionFreeTextMaxLength(100);

    // Cerrar el modal
    setIsPreviewModalOpen(false);
  };

  const handleOpenEvaluationListModal = () => {
    setIsEvaluationListModalOpen(true);
  };

  const handleCloseEvaluationListModal = () => {
    setIsEvaluationListModalOpen(false);
  };

  const handleEditEvaluation = (index) => {
    // Lógica para editar la encuesta
    console.log(`Editando encuesta ${index}`);
  };

  const handleAddEmployees = (index) => {
    // Lógica para agregar empleados a la encuesta
    console.log(`Agregando empleados a la encuesta ${index}`);
  };

  return (
    <div>
      <h2>Editor de Encuestas</h2>

      <h3>Título de la Encuesta</h3>
      <input type="text" value={surveyTitle} onChange={handleSurveyTitleChange} />

      <p style={{ fontSize: "10px" }}>Fecha límite para realizar la encuesta:</p>
    


      <h3>Preguntas</h3>
      <div>
        <input type="text" value={newQuestionText} onChange={handleQuestionTextChange} placeholder="Ingresa una pregunta" />
        <select value={newQuestionEvaluationArea} onChange={handleQuestionEvaluationAreaChange}>
          <option value="">Selecciona un área de evaluación</option>
          {evaluationAreas.map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={newEvaluationArea}
          onChange={(event) => setNewEvaluationArea(event.target.value)}
          placeholder="Agregar nueva área de evaluación"
        />
        <button onClick={handleAddEvaluationArea}>Agregar Área</button>
        <select value={newQuestionAnswerType} onChange={handleQuestionAnswerTypeChange}>
          <option value="">Selecciona un tipo de respuesta</option>
          {answerTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        {newQuestionAnswerType === 'Likert' && (
          <select value={newQuestionLikertOptions} onChange={handleQuestionLikertOptionsChange}>
            <option value={0}>1 a 5</option>
            <option value={1}>En desacuerdo, Algo en desacuerdo, De acuerdo, NS/NC, Muy de acuerdo</option>
          </select>
        )}
        {newQuestionAnswerType === 'Múltiple respuesta' && (
          <input
            type="number"
            value={newQuestionMultipleChoiceOptions}
            onChange={handleQuestionMultipleChoiceOptionsChange}
            placeholder="Número de opciones de respuesta"
          />
        )}
        {newQuestionAnswerType === 'Respuesta libre' && (
          <input
            type="number"
            value={newQuestionFreeTextMaxLength}
            onChange={handleQuestionFreeTextMaxLengthChange}
            placeholder="Máximo de caracteres"
          />
        )}
        <button onClick={handleAddQuestion}>Agregar Pregunta</button>
      </div>

      <h3>Lista de Preguntas</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {index === 0 && (
              <div>
                <strong>TÍTULO DE LA ENCUESTA:</strong> {surveyTitle.toUpperCase()}<br />
              </div>
            )}
            {question.text} - <strong>Área de Evaluación:</strong> {question.evaluationArea} - <strong>Tipo de Respuesta:</strong> {question.answerType}
            {question.answerType === 'Likert' && (
              <p><strong>Opciones de Likert:</strong> <span>{question.likertOptions.join(', ')}</span></p>
            )}
            {question.answerType === 'Múltiple respuesta' && (
              <p><strong>Número de opciones de respuesta:</strong> <span>{question.multipleChoiceOptions}</span></p>
            )}
            {question.answerType === 'Respuesta libre' && (
              <p><strong>Máximo de caracteres:</strong> <span>{question.freeTextMaxLength}</span></p>
            )}
          </li>
        ))}
        {questions.length > 0 && (
          <li>
            <button onClick={handlePreviewSurvey}>Previsualizar</button>
          </li>
        )}
      </ul>

      <button onClick={handleOpenEvaluationListModal}>Listado de Encuestas</button>

      <Modal
        isOpen={isPreviewModalOpen}
        onRequestClose={handleClosePreviewModal}
        contentLabel="Previsualización de la Encuesta"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto',
          },
        }}
      >
        <h2>Previsualización de la Encuesta</h2>
        <h3>{surveyTitle}</h3>
        {questions.map((question, index) => (
          <div key={index}>
            <h4>{question.text}</h4>
            {question.answerType === 'Likert' && (
              <div>
                {question.likertOptions.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input type="radio" name={`question-${index}`} value={option} />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
            {question.answerType === 'Múltiple respuesta' && (
              <div>
                {Array.from({ length: question.multipleChoiceOptions }, (_, i) => i + 1).map((option) => (
                  <div key={option}>
                    <input type="checkbox" name={`question-${index}-option-${option}`} />
                    <label>Opción {option}</label>
                  </div>
                ))}
              </div>
            )}
            {question.answerType === 'Respuesta libre' && (
              <div>
                <textarea maxLength={question.freeTextMaxLength} />
              </div>
            )}
          </div>
        ))}
        <div>
          <button onClick={handleAddSurvey}>Agregar Encuesta</button>
          <button onClick={handleClosePreviewModal}>Cerrar</button>
        </div>
      </Modal>

      <Modal
        isOpen={isEvaluationListModalOpen}
        onRequestClose={handleCloseEvaluationListModal}
        contentLabel="Listado de Encuestas"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '80%',
            maxHeight: '80%',
            overflow: 'auto',
          },
        }}
      >
        <h2>Listado de Encuestas</h2>
        <ul>
          {evaluations.map((evaluation, index) => (
            <li key={index}>
              <h3>{evaluation.title}</h3>
              <button onClick={() => handleEditEvaluation(index)}>Editar</button>
              <button onClick={() => handleAddEmployees(index)}>Agregar Empleados</button>
            </li>
          ))}
        </ul>
        <button onClick={handleCloseEvaluationListModal}>Cerrar</button>
      </Modal>

      {showSuccessMessage && (
        <div className="success-message">
          <p>¡Encuesta agregada con éxito!</p>
        </div>
      )}
    </div>
  );
};


export default SurveyEditor;