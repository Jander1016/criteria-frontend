// Empleados.jsx
import React from "react";
import styled from "styled-components";
import EmployeesList from "../components/EmployeesList/EmployeesList";

export function Empleados() {
  return (
    <Container>
      <h1>Empleados</h1>
      <EmployeesContainer>
        <EmployeesList />
      </EmployeesContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const EmployeesContainer = styled.div`
  width: 80%;
  max-width: 800px;
  height: 80%;
  overflow-y: auto; /* Habilita el desplazamiento vertical si es necesario */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
