import React from 'react';
import { Pie } from 'react-chartjs-2';

const Results = ({ data }) => {
  const chartData = {
    labels: ['Balance Inicial', 'Depósitos Periódicos', 'Interés total'],
    datasets: [
      {
        data: [data.initialBalance, data.periodicDeposits, data.totalInterest],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <h2>Puedes ahorrar</h2>
      <h3>{data.totalSavings.toFixed(2)} €</h3>
      <p>Ahorro {data.periodicDeposits / data.duration} € mensual durante {data.duration} años</p>

      <Pie data={chartData} />

      <h3>Detalles:</h3>
      <ul>
        <li>Balance Inicial: {data.initialBalance} €</li>
        <li>Depósitos Periódicos: {data.periodicDeposits} €</li>
        <li>Interés total: {data.totalInterest} €</li>
      </ul>
    </div>
  );
};

export default Results;
