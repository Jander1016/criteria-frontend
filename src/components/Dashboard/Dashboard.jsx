import React from 'react';
import styled from 'styled-components';
import EmployeesList from '../EmployeesList/EmployeesList';

const Dashboard = () => {
  return (
    <Container>
      <Section>
        <h2>Encuestas</h2>
        <p>Aquí puedes ver un listado de encuestas</p>
        {/* Agrega aquí el componente para mostrar el listado de encuestas */}
      </Section>
      <Section>
        <h2>Empleados</h2>
        <p>Aquí puedes ver un listado de empleados</p>
        <EmployeesList />
      </Section>
      <Section>
        <h2>Gráficos de Resultados</h2>
        <p>Aquí puedes ver gráficos de los resultados de las encuestas</p>
        {/* Agrega aquí componentes de gráficos */}
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Section = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export default Dashboard;
