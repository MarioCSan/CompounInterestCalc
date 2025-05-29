// CalculatorApp.jsx
import React, { useState } from "react";
import CalculatorForm from "./CalculatorForm";
import CalculatorResults from "./CalculatorResults";

const periods = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  yearly: 1,
};

const CalculatorApp = () => {
  const [initial, setInitial] = useState(1000);
  const [contribution, setContribution] = useState(100);
  const [frequency, setFrequency] = useState("monthly");
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);
  const [chartData, setChartData] = useState([]);
  const [finalAmount, setFinalAmount] = useState(null);
  const [pieData, setPieData] = useState([]);

  const calculate = () => {
    const timesPerYear = periods[frequency];
    const r = rate / 100 / timesPerYear;
    const n = years * timesPerYear;

    let balance = parseFloat(initial);
    let totalContribution = 0;
    const data = [];

    for (let i = 1; i <= n; i++) {
      balance = balance * (1 + r) + parseFloat(contribution);
      totalContribution += parseFloat(contribution);

      if (i % timesPerYear === 0) {
        const yearIndex = i / timesPerYear;
        const interest = balance - totalContribution - parseFloat(initial);

        data.push({
          year: yearIndex,
          initialContribution: parseFloat(initial),
          contributions: totalContribution,
          interest: interest,
          total: balance,
        });
      }
    }

    const interestEarned = balance - totalContribution - parseFloat(initial);
    const regularContributions = totalContribution;

    setFinalAmount(balance);
    setChartData(data);
    setPieData([
      { name: "Aportación inicial", value: parseFloat(initial) * years },
      { name: "Aportaciones recurrentes", value: regularContributions },
      { name: "Intereses generados", value: interestEarned },
    ]);
  };

  return (
    <div style={{
      backgroundColor: "#212121",
      color: "#FFFFFF",
      background: "linear-gradient(135deg, #0F0C29, #302B63,rgb(138, 81, 195))",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{
          color: "#14FFEC",
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          marginBottom: "1rem",
          textAlign: "center",
          padding: "0 1rem",                   
          wordBreak: "break-word",       
        }}>
          Calculadora de Interés Compuesto
        </h1>

        <p style={{ color: "#C084FC", fontSize: "1.2rem", marginBottom: "2rem" }}>
          Calcula el crecimiento de tu inversión a lo largo del tiempo.<br />
          {/* <div style={{ textAlign: "center" }}>Por Mario Canales</div> */}
        </p></div>
      <CalculatorForm
        initial={initial}
        setInitial={setInitial}
        contribution={contribution}
        setContribution={setContribution}
        frequency={frequency}
        setFrequency={setFrequency}
        rate={rate}
        setRate={setRate}
        years={years}
        setYears={setYears}
        calculate={calculate}
      />

      <CalculatorResults
        finalAmount={finalAmount}
        chartData={chartData}
        pieData={pieData}
      />
    </div>
  );
};

export default CalculatorApp;
