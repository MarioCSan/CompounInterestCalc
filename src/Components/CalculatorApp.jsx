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
    <div>
      <h1>Calculadora de Ahorros</h1>
      <CalculatorForm onSubmit={handleFormSubmit} />
      {calculationData && <Results data={calculationData} />}
    </div>
  );
};

export default CalculatorApp;
