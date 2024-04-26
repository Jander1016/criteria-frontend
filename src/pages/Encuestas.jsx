import styled from "styled-components";
import SurveyEditor from "../components/SurveyEditor/SurveyEditor";

export function Encuestas() {
  return (
    <Container>
      <h1>Encuestas</h1>
      <ContentWrapper>
        <SurveyEditor />
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export default Encuestas;