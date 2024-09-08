import React, { useState } from 'react';

const CalculatorForm = () => {
    // Estados para almacenar los valores del formulario
    const [initialBalance, setInitialBalance] = useState(1000);
    const [depositAmount, setDepositAmount] = useState(100);
    const [interestRate, setInterestRate] = useState(1.000);
    const [duration, setDuration] = useState(5);
    const [depositFrequency, setDepositFrequency] = useState("Mensual"); // Frecuencia de depósitos
    const [depositTiming, setDepositTiming] = useState("Inicio"); // Momento de los depósitos
    const [result, setResult] = useState(null); // Resultado del cálculo

    // Función para manejar el cálculo cuando se presiona el botón "Calcular"
    const handleCalculate = () => {
        // Validar que todos los campos tengan valores válidos
        if (!initialBalance || !depositAmount || !interestRate || !duration) {
            alert("Por favor, complete todos los campos con valores válidos.");
            return;
        }
        var n = setPeriodicity();
        const initialBalanceNumber = parseFloat(initialBalance);
        const depositAmountNumber = parseFloat(depositAmount);
        const interestRateNumber = parseFloat(interestRate) / 100;
        const durationNumber = parseFloat(duration);

        const totalAmount = initialBalanceNumber * Math.pow(1 + interestRateNumber / n, n * durationNumber) 
        + depositAmountNumber * ((Math.pow(1 + interestRateNumber / n, n * durationNumber) - 1) / (interestRateNumber / n));

        // Calcular el interés ganado
        const compoundInterest = totalAmount - (initialBalanceNumber + depositAmountNumber * n * durationNumber);

        const finalAmount = totalAmount + compoundInterest
              
        setResult(finalAmount.toFixed(3)); 
    };

    const setPeriodicity = () => {
       console.log(depositFrequency)
       if (depositFrequency === "Semanal"){
        return 52;
       } else if (depositFrequency === "Bisemanal"){
            return 26;
       }
       if (depositFrequency == "Mensual"){
            return 12;
       } else {
           return 1;
       }
    }
    return (
        <div>
            <h2>Calculadora de Ahorro</h2>
            <div>
                <label>Deposito Inicial: </label>
                <input
                    type="number"
                    placeholder="Balance Inicial (€)"
                    value={initialBalance}
                    onChange={(e) => setInitialBalance(e.target.value)} />
            </div>
            <div>
                <label>Depositos periodicos: </label>
                <input
                    type="number"
                    placeholder="Depósito Periódico (€)"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                />
            
                <select value={depositFrequency} onChange={(e) => setDepositFrequency(e.target.value)}>
                    <option value="Semanal">Semanalmente (52/año) </option>
                    <option value="Bisemanal">Bi-Semanal (26/año)</option>
                    <option value="Mensual">Mensual (12/año)</option>
                    <option value="Anual">Anual (1/año)</option>
                </select>
            </div>

            <div>
                <label>Tiempo depositos: </label>
                <select value={depositTiming} onChange={(e) => setDepositTiming(e.target.value)}>
                    <option value="Inicio">Haces los depósitos al inicio de cada periodo</option>
                    <option value="Final">Haces los depósitos al final de cada periodo</option>
                </select>

            </div>

            <div>
                <label>Ratio interés Anual: </label>
                <input
                    type="number"
                    placeholder="Ratio Interés Anual (%)"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                />
            </div>

            <div>
                <label>Duración: </label>
                <input
                    type="number"
                    placeholder="Duración (años)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

            </div>

            <div>
                <button onClick={handleCalculate}>Calcular</button>
            </div>

            {result !== null && (
                <div>
                    <h3>Resultado:</h3>
                    <p>El total calculado es: {result} €</p>
                </div>
            )}
        </div>
    );
};

export default CalculatorForm;
