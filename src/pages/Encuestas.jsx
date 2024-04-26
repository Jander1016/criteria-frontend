import styled from "styled-components";
import SurveyEditor from "../components/SurveyEditor/SurveyEditor";

export function Encuestas() {
  return (
    <Container>
      <h1>Encuestas</h1>
      <ContentWrapper>
<<<<<<< HEAD
        <SurveyEditor />
=======
        <CustomSurveyEditor />
>>>>>>> e64eb0938c02b0a456cf2d94f010ce4f66c4e3b9
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
<<<<<<< HEAD

export default Encuestas;
=======

const CustomSurveyEditor = styled(SurveyEditor)`
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  color: #333;
  font-weight: bold;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #ff7f50;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select {
  background-color: #fff;
}

.question-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

button {
  background-color: #ff7f50;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  color: #333;
}

li strong {
  font-weight: bold;
}

p {
  font-weight: bold;
  color: #333;
}

p span {
  font-weight: normal;
}

`;
>>>>>>> e64eb0938c02b0a456cf2d94f010ce4f66c4e3b9
