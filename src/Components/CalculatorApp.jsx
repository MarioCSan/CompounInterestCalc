import React, { useState } from 'react';
import CalculatorForm from './CalculatorForm';


const CalculatorApp = () => {
  const [calculationData, setCalculationData] = useState(null);

  const handleFormSubmit = (data) => {
    const result = calculateResults(data); // Función de cálculo
    setCalculationData(result.toLocaleString('es-ES');
  };

  const calculateResults = (data) => {
    // Lógica para calcular el ahorro y el interés acumulado
    // (esta parte variará según las fórmulas que quieras usar)
    return {
      totalSavings: data.totalSavings,
      initialBalance: data.initialBalance,
      periodicDeposits: data.periodicDeposits,
      totalInterest: data.totalInterest,
      graphData: { /* datos para el gráfico */ },
    };
  };

  return (
    <div className='container'>
     
      <div className='container-calculator'>
      <h1>Calculadora de interés compuesto</h1>
       <select className='selector'>
        <option>¿Cuánto puedo ahorrar?</option>
        <option>¿Cuánto tardaré en alcanzar mi objetivo de ahorro?</option>
        <option>¿Cuánto necesito ahorrar para cada periodo para alcanzar mi objetivo de ahorro?</option>
        <option>¿Que porcentaje de interés necesito para alcanzar mi objetivo de ahorro?</option>
        <option>¿Cuánto tardaré en rentabilizar mi inversión?</option> 
      </select>
      <CalculatorForm onSubmit={handleFormSubmit} />

      {calculationData}
      </div>
    </div>
  );
};

export default CalculatorApp;
