import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'; // Importa el componente de Login

const Index = () => {
  return (
    <div>
      <Login /> {/* Renderiza el componente de Login */}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root')); // Renderiza el componente Index en el elemento con id 'root'
