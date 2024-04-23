import React from 'react';
import styled from 'styled-components';
//import EmployeeChart from '../components/Graphs/EvaluacionDesempenioChart/EvaluacionDesempenioChart'; // Asegúrate de especificar la ruta correcta al componente EmployeeChart



export function Reportes({ employeeData }) {
  return (
    <Container>
      <h1>Reportes</h1>
      <GraphContainer>
        {employeeData.map((employee) => (
          <EmployeeChart key={employee.id} data={employee.evaluationData} />
        ))}
      </GraphContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const GraphContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* La cuadrícula se ajustará automáticamente al ancho del contenedor y mostrará como máximo 3 gráficos por fila */
  gap: 20px; /* Espacio entre los gráficos */
`;