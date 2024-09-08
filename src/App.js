import React from 'react';

import './App.css'; // Si tienes estilos personalizados
import CalculatorApp from './Components/CalculatorApp';

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Calculadora de Interés Compuesto</h1>
      </header> */}
      <main>
        <CalculatorApp />
      </main>
    </div>
  );
};

export default App;
