import React from "react";
import './CalculatorForm.css';


const CalculatorForm = ({
    initial,
    setInitial,
    contribution,
    setContribution,
    frequency,
    setFrequency,
    rate,
    setRate,
    years,
    setYears,
    calculate,
}) => {
    return (
        <div style={{
            background: "#323232",
            padding: "1.5rem",
            borderRadius: "1rem",
            maxWidth: "500px",
            marginBottom: "2rem",
            width: "60%",
            gap: "8rem",
        }}>
            <div style={{ marginBottom: "1rem" }}>
                <label>Cantidad inicial</label>
                <div style={{ display: "flex", gap: "0.0rem" }}>
                    <input type="number" value={initial} onChange={(e) => setInitial(e.target.value)} className="form-input"
                    />
                    <span style={{ width: "40px", textAlign: "center", lineHeight: "2.5", backgroundColor: "#444", borderRadius: "4px" }}>€</span>
                </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label>Aportación recurrente</label>
                <div style={{ display: "flex", gap: "0.0rem" }}>
                    <input type="number" value={contribution} onChange={(e) => setContribution(e.target.value)} className="form-input"
                    />
                    <span style={{ width: "40px", textAlign: "center", lineHeight: "2.5", backgroundColor: "#444", borderRadius: "4px" }}>€</span>
                </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label>Frecuencia de aportación</label>
                <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="form-input"
                >
                    <option value="weekly">Semanal</option>
                    <option value="biweekly">Cada dos semanas</option>
                    <option value="semimonthly">Quincenal</option>
                    <option value="monthly">Mensual</option>
                    <option value="yearly">Anual</option>
                </select>
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label>Tipo de interés anual</label>
                <div style={{ display: "flex", gap: "0.0rem" }}>
                    <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="form-input"
                    />
                    <span style={{ width: "40px", textAlign: "center", lineHeight: "2.5", backgroundColor: "#444", borderRadius: "4px" }}>%</span>
                </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
                <label>Años de inversión</label>
                <input type="number" value={years} onChange={(e) => setYears(e.target.value)} s className="form-input"
                />
            </div>
            <button
                onClick={calculate}
                style={{
                    backgroundColor: "#C084FC",
                    color: "#000",
                    padding: "0.75rem 1.25rem",
                    border: "none",
                    borderRadius: "0.75rem",
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.3s ease",
                    fontFamily: 'Syncopate'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 0 30px #14FFEC, 0 0 40px #14FFEC";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                Calcular
            </button>
        </div>
    );
};

export default CalculatorForm;
