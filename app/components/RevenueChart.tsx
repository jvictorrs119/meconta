"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    TooltipItem,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

export default function RevenueChart() {
    const labels = Array.from({ length: 20 }, (_, i) => `${i + 1}`);
    const faturamentoAcumulado = [
        300, 450, 850, 850, 1050, 1650, 1750, 2200, 2500, 2550, 2670, 3470,
        3620, 3820, 4170, 4570, 4690, 4780, 5080, 5240,
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Acumulado (R$)",
                data: faturamentoAcumulado,
                borderColor: "#2d7a4f",
                backgroundColor: "rgba(45, 122, 79, 0.06)",
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 0,
                pointHitRadius: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#2d7a4f",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
            },
            {
                label: "Teto Mensal",
                data: Array(20).fill(6750),
                borderColor: "#c9a84c",
                borderDash: [5, 5],
                pointRadius: 0,
                borderWidth: 1.5,
                fill: false,
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
            legend: { display: false },
            tooltip: {
                backgroundColor: "#1e2e24",
                titleColor: "#fff",
                bodyColor: "#e2e8f0",
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: function (context: TooltipItem<"line">) {
                        return `${context.dataset.label || ""}: R$ ${(context.parsed.y ?? 0).toLocaleString("pt-BR")}`;
                    },
                },
            },
        },
        scales: {
            y: {
                grid: { display: false },
                ticks: { font: { size: 10 }, color: "#6b7c6e" },
                border: { display: false },
            },
            x: {
                grid: { display: false },
                ticks: { font: { size: 10 }, color: "#94a3b8" },
                border: { display: false },
            },
        },
    };

    return (
        <section className="chart-section" id="revenue-chart-section">
            <div className="chart-header">
                <h3>Evolução Acumulada vs Teto</h3>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Média diária: R$ 262,00
                </span>
            </div>
            <Line data={data} options={options} />
        </section>
    );
}
