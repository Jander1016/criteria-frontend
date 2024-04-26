import React from "react";
import styled from "styled-components";


export function Estadisticas() {
  return (
    <Container>
      <h1>Estadistica</h1>
      <ContentWrapper>
        
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

export default Estadisticas;
