import React, { useState } from 'react';
import styled from 'styled-components';

// Importa tu logo en formato PNG
import logo from './logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <InputContainer>
        <InputLabel>Ingresar Email</InputLabel>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Ingresar Contraseña</InputLabel>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Contraseña"
        />
      </InputContainer>
      <ForgotPasswordLink>¿Olvidaste tu contraseña?</ForgotPasswordLink>
      <Button onClick={handleLogin}>Ingresar</Button>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  font-size: 14px;
  color: #000;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #00abe8;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: #008bbd;
  }
`;

const ForgotPasswordLink = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
`;
