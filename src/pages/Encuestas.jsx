import React from "react";
import styled from "styled-components";
import CreateSurvey from "../components/CreateSurvey/CreateSurvey";
import AreaEvaluation from "../components/AreaEvaluation/AreaEvaluation"; // Ajusta la ruta de acuerdo a la ubicación real del componente



export function Encuestas() {

  const StyledSelect = styled.select`
  margin-bottom: 20px; /* Agrega un margen inferior para separar el select del calendario */
`;

  return (
    <Container>
      <h1>Crear Encuesta</h1>
      <h2>Encuestas</h2>
      <ContentContainer>
        <CreateSurvey />
        <AreaEvaluation />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CreateSurveyWithMarginBottom = styled(CreateSurvey)`
  margin-bottom: 15px;
`;

const AreaEvaluationWithMarginBottom = styled(AreaEvaluation)`
  margin-bottom: 15px;
`;

const StyledSelect = styled.select`
  margin-bottom: 15px; /* Agrega un margen inferior para separar el select del calendario */
`;
