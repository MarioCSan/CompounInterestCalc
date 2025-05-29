// CalculatorResults.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Colores y estilos
const colors = {
  primary: "#14FFEC",
  secondary: "#0D7377",
  accent: "#323232",
  text: "#FFFFFF",pie:  ["#C084FC", "#14FFEC", "#FF6EC7"],
 // pie: [ "#89CFF0", "#14FFEC", "#C084FC"],
};

// Formato euro
const formatEuro = (num) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(num);

// Tooltip para gráfico de barras
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
      >
        <p>Año: {label}</p>
        {payload.map((item) => (
          <p key={item.dataKey}>
            {item.name}: {formatEuro(item.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Tooltip para gráfico circular
const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
      >
        <p>
          {name}: {formatEuro(value)}
        </p>
      </div>
    );
  }
  return null;
};

const CalculatorResults = ({ chartData }) => {
  if (!chartData || chartData.length === 0) return null;

  const lastYear = chartData[chartData.length - 1];
  const pieData = [
    {
      name: "Aportación inicial",
      value: lastYear.initialContribution,
    },
    {
      name: "Aportaciones recurrentes",
      value: lastYear.contributions,
    },
    {
      name: "Intereses generados",
      value: lastYear.interest,
    },
  ];

  return (
    <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Cantidad final: {formatEuro(lastYear.total)}
      </h2>

      <h3 style={{ marginBottom: "1rem" }}>Gráfico de crecimiento</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="initialContribution"
                fill={colors.pie[0]}
                name="Aportación inicial"
                stackId="a"
              />
              <Bar
                dataKey="contributions"
                fill={colors.pie[1]}
                name="Aportaciones recurrentes"
                stackId="a"
              />
              <Bar
                dataKey="interest"
                fill={colors.pie[2]}
                name="Intereses"
                stackId="a"
              />
            </BarChart>
          </ResponsiveContainer>
        </ResponsiveContainer>
      </div>

      <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Distribución final</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name }) => name}
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors.pie[index]} />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        Desglose año a año
      </h3>
      <div
        style={{
          overflowX: "auto",
          maxWidth: "100%",
          border: `1px solid ${colors.accent}`,
          borderRadius: "0.5rem",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: colors.text,
          }}
        >
          <thead>
            <tr>
              {[
                "Año",
                "Aportación inicial (€)",
                "Aportaciones recurrentes (€)",
                "Intereses (€)",
                "Total (€)",
              ].map((title) => (
                <th
                  key={title}
                  style={{
                    borderBottom: `1px solid ${colors.accent}`,
                    padding: "0.5rem",
                    textAlign: title === "Año" ? "center" : "right",
                  }}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {chartData.map((row) => (
              <tr key={row.year}>
                <td
                  style={{
                    borderBottom: `1px solid ${colors.accent}`,
                    padding: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {row.year}
                </td>
                <td
                  style={{
                    borderBottom: `1px solid ${colors.accent}`,
                    padding: "0.5rem",
                    textAlign: "right",
                  }}
                >
                  {formatEuro(row.initialContribution)}
                </td>
                <td
                  style={{
                    borderBottom: `1px solid ${colors.accent}`,
                    padding: "0.5rem",
                    textAlign: "right",
                  }}
                >
                  {formatEuro(row.contributions)}
                </td>
                <td
                  style={{
                    borderBottom: `1px solid ${colors.accent}`,
                    padding: "0.5rem",
                    textAlign: "right",
                  }}
                >
                  {formatEuro(row.interest)}
                </td>
                <td
                  style={{
                    borderBottom: `1px solid ${colors.accent}`,
                    padding: "0.5rem",
                    textAlign: "right",
                  }}
                >
                  {formatEuro(row.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculatorResults;
