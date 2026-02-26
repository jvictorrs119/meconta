interface KpiCardProps {
    label: string;
    value: string;
    valueColor?: string;
    trend?: string;
    trendDirection?: "up" | "down" | "neutral";
    progress?: number; // 0-100 for progress bar
}

export default function KpiCard({
    label,
    value,
    valueColor,
    trend,
    trendDirection = "neutral",
    progress,
}: KpiCardProps) {
    return (
        <div className="kpi-card" id={`kpi-${label.toLowerCase().replace(/\s+/g, "-")}`}>
            <span className="kpi-label">{label}</span>
            <span className="kpi-value" style={valueColor ? { color: valueColor } : undefined}>
                {value}
            </span>

            {trend && (
                <div className={`trend ${trendDirection}`}>
                    {trendDirection === "up" && "▲ "}
                    {trendDirection === "down" && "▼ "}
                    {trend}
                </div>
            )}

            {progress !== undefined && (
                <div className="teto-container">
                    <div className="progress-bg">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
