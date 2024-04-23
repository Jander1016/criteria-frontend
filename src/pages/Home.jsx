import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard/Dashboard";

export function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Dashboard />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
