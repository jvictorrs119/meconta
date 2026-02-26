import Sidebar from "./components/Sidebar";
import KpiCard from "./components/KpiCard";
import RevenueChart from "./components/RevenueChart";
import CashFlowChart from "./components/CashFlowChart";
import DreSection from "./components/DreSection";

export default function Dashboard() {
  const dataAtual = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
  }).format(new Date());

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main className="content" id="main-content">
        <header className="welcome-header">
          <h2>Olá, Gabriel!</h2>
          <p>Aqui está o panorama financeiro do seu negócio hoje, {dataAtual}.</p>
        </header>

        <div className="stats-grid" id="kpi-grid">
          <KpiCard
            label="Faturamento Bruto"
            value="R$ 5.240,00"
            trend="12% vs mês anterior"
            trendDirection="up"
          />
          <KpiCard
            label="Lucro Líquido"
            value="R$ 3.390,00"
            valueColor="var(--success)"
            trend="Margem de 64.7%"
          />
          <KpiCard
            label="Gastos Acumulados"
            value="R$ 1.850,00"
            valueColor="var(--danger)"
            trend="5% economia em insumos"
            trendDirection="down"
          />
          <KpiCard
            label="Proporção do Teto"
            value="77,6%"
            progress={77.6}
          />
        </div>

        {/* Charts Row: Revenue + DRE */}
        <div className="visual-grid" id="visual-grid">
          <RevenueChart />
          <DreSection />
        </div>

        {/* Cash Flow Chart - Full Width */}
        <div className="cashflow-row" id="cashflow-row">
          <CashFlowChart />
        </div>
      </main>
    </div>
  );
}
