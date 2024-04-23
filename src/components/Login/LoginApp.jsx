import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'; // Importa el componente de Login

const LoginApp = () => {
  return (
    <div>
      <Login /> {/* Renderiza solo el componente de Login */}
    </div>
  );
};

ReactDOM.render(<LoginApp />, document.getElementById('root'));
