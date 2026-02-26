"use client";

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    TooltipItem,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function CashFlowChart() {
    const months = ["Set", "Out", "Nov", "Dez", "Jan", "Fev"];

    const entradas = [4200, 3800, 5100, 4700, 4950, 5240];
    const saidas = [2100, 2400, 1900, 2600, 2050, 1850];
    const saldo = entradas.map((e, i) => e - saidas[i]);

    const data = {
        labels: months,
        datasets: [
            {
                label: "Entradas",
                data: entradas,
                backgroundColor: "rgba(45, 122, 79, 0.75)",
                borderRadius: 6,
                borderSkipped: false,
                barPercentage: 0.6,
                categoryPercentage: 0.7,
            },
            {
                label: "Saídas",
                data: saidas,
                backgroundColor: "rgba(217, 76, 76, 0.65)",
                borderRadius: 6,
                borderSkipped: false,
                barPercentage: 0.6,
                categoryPercentage: 0.7,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
            mode: "index" as const,
            intersect: false,
        },
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
                align: "end" as const,
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 16,
                    font: { size: 11, family: "Inter" },
                    color: "#6b7c6e",
                },
            },
            tooltip: {
                backgroundColor: "#1e2e24",
                titleColor: "#fff",
                bodyColor: "#c5d4c8",
                padding: 12,
                cornerRadius: 8,
                displayColors: true,
                callbacks: {
                    label: function (context: TooltipItem<"bar">) {
                        const val = Math.abs(context.parsed.y ?? 0);
                        return `${context.dataset.label || ""}: R$ ${val.toLocaleString("pt-BR")}`;
                    },
                },
            },
        },
        scales: {
            y: {
                grid: {
                    color: "rgba(224, 221, 212, 0.5)",
                    drawBorder: false,
                },
                ticks: {
                    font: { size: 10 },
                    color: "#6b7c6e",
                    callback: function (value: string | number) {
                        const num = Number(value);
                        return `R$ ${(num / 1000).toFixed(1)}k`;
                    },
                },
                border: { display: false },
            },
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 11, weight: 500 as const },
                    color: "#6b7c6e",
                },
                border: { display: false },
            },
        },
    };

    // Calculate current month net
    const currentSaldo = saldo[saldo.length - 1];
    const previousSaldo = saldo[saldo.length - 2];
    const saldoTrend = currentSaldo > previousSaldo ? "up" : "down";
    const saldoPercent = Math.abs(
        ((currentSaldo - previousSaldo) / previousSaldo) * 100
    ).toFixed(1);

    return (
        <section className="chart-section" id="cashflow-chart-section">
            <div className="chart-header">
                <div>
                    <h3>Fluxo de Caixa</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        Últimos 6 meses
                    </p>
                </div>
                <div style={{ textAlign: "right" }}>
                    <span style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: currentSaldo > 0 ? "var(--success)" : "var(--danger)",
                        display: "block",
                    }}>
                        R$ {currentSaldo.toLocaleString("pt-BR")},00
                    </span>
                    <span style={{
                        fontSize: "0.75rem",
                        color: saldoTrend === "up" ? "var(--success)" : "var(--danger)",
                        fontWeight: 500,
                    }}>
                        {saldoTrend === "up" ? "▲" : "▼"} {saldoPercent}% vs mês anterior
                    </span>
                </div>
            </div>
            <Bar data={data} options={options} />
        </section>
    );
}
