import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getSurveys = () => api.get('/surveys');
export const createSurvey = (survey) => api.post('/surveys', survey);
export const getSurveyById = (id) => api.get(`/surveys/${id}`);
export const updateSurvey = (id, survey) => api.put(`/surveys/${id}`, survey);
export const deleteSurvey = (id) => api.delete(`/surveys/${id}`);
export const getEmployeeEvaluation = () => api.get('/employee-evaluation');
