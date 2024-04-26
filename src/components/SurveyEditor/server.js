const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Datos de ejemplo para las encuestas
let surveys = [];

// Ruta para obtener todas las encuestas
app.get('/surveys', (req, res) => {
  res.json(surveys);
});

// Ruta para crear una nueva encuesta
app.post('/surveys', (req, res) => {
  const { title, questions } = req.body;
  const newSurvey = { id: surveys.length + 1, title, questions };
  surveys.push(newSurvey);
  res.status(201).json(newSurvey);
});

// Ruta para obtener una encuesta por ID
app.get('/surveys/:id', (req, res) => {
  const survey = surveys.find(s => s.id === parseInt(req.params.id));
  if (!survey) {
    return res.status(404).json({ error: 'Encuesta no encontrada' });
  }
  res.json(survey);
});

// Ruta para actualizar una encuesta por ID
app.put('/surveys/:id', (req, res) => {
  const { title, questions } = req.body;
  const survey = surveys.find(s => s.id === parseInt(req.params.id));
  if (!survey) {
    return res.status(404).json({ error: 'Encuesta no encontrada' });
  }
  survey.title = title;
  survey.questions = questions;
  res.json(survey);
});

// Ruta para eliminar una encuesta por ID
app.delete('/surveys/:id', (req, res) => {
  const index = surveys.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Encuesta no encontrada' });
  }
  const deletedSurvey = surveys.splice(index, 1)[0];
  res.json(deletedSurvey);
});

// Ruta para obtener la evaluación del empleado
app.get('/employee-evaluation', (req, res) => {
  const employeeEvaluation = {
    title: 'Evaluación del empleado',
    areas: [
      {
        name: 'Conocimiento del puesto',
        questions: [
          'El empleado entiende las funciones y responsabilidades del puesto',
          'El empleado posee los conocimientos y habilidades necesarios para el puesto'
        ]
      },
      {
        name: 'Planificación y resolución',
        questions: [
          'El empleado requiere una supervisión mínima',
          'El empleado trabaja de forma organizada',
          'El empleado es capaz de identificar problemas',
          'El empleado es capaz de solucionar problemas',
          'El empleado reacciona rápidamente ante las dificultades'
        ]
      },
      {
        name: 'Productividad',
        questions: [
          'El empleado consigue los objetivos',
          'El empleado puede manejar varios proyectos a la vez',
          'El empleado consigue los estándares de productividad'
        ]
      },
      {
        name: 'Trabajo en equipo',
        questions: [
          'El empleado sabe trabajar en equipo',
          'El empleado ayuda a su equipo',
          'El empleado trabaja bien con diferentes tipos de persona',
          'El empleado participa en conversaciones de grupo'
        ]
      },
      {
        name: 'Habilidades de comunicación',
        questions: [
          'El empleado participa en las reuniones',
          'El empleado se explica de forma clara y fácil de entender',
          'El empleado sabe escuchar',
          'El empleado expone sus ideas de forma eficaz'
        ]
      },
      {
        name: 'Habilidades de dirección',
        questions: [
          'El empleado transmite bien los objetivos a los integrantes de su equipo',
          'El empleado comunica a todos en su área el éxito en el cumplimiento de objetivos',
          'El empleado demuestra dotes de liderazgo',
          'El empleado motiva a su equipo para conseguir los objetivos'
        ]
      }
    ]
  };
  res.json(employeeEvaluation);
});

app.listen(port, () => {
  console.log(`Servidor API fake iniciado en el puerto ${port}`);
});
