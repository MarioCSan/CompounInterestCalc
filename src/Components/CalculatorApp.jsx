import React, { useState } from 'react';
import CalculatorForm from './CalculatorForm';
import Results from './Results';

const CalculatorApp = () => {
  const [calculationData, setCalculationData] = useState(null);

  const handleFormSubmit = (data) => {
    // Aquí iría la lógica para calcular los resultados según los datos
    const result = calculateResults(data); // Función de cálculo
    setCalculationData(result);
  };

  const calculateResults = (data) => {
    // Lógica para calcular el ahorro y el interés acumulado
    // (esta parte variará según las fórmulas que quieras usar)
    return {
      totalSavings: 13730.62,
      initialBalance: 1000,
      periodicDeposits: 12000,
      totalInterest: 730.62,
      graphData: { /* datos para el gráfico */ },
    };
  };

  return (
    <div className='container'>

     
      <div className='container-calculator'>
      <h1>Calculadora de interes compuesto</h1>
       <select className='selector'>
        <option>¿Cuánto puedo ahorrar?</option>
        <option>¿Cuánto tardaré en alcanzar mi objetivo de ahorro?</option>
        <option>¿Cuánto necesito ahorrar para cada periodo para alcanzar mi objetivo de ahorro?</option>
        <option>¿Que porcentaje de interés necesito para alcanzar mi objetivo de ahorro?</option>
        <option>¿Cuánto tardaré en rentabilizar mi inversión?</option> 
      </select>
      <CalculatorForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default CalculatorApp;
