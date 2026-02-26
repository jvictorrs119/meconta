import Sidebar from "../components/Sidebar";

interface SaleItem {
    date: string;
    title: string;
    category: string;
    status: "paid" | "pending";
    gross: string;
    costTotal: string;
    costBreakdown: string;
    net: string;
}

const salesData: SaleItem[] = [
    {
        date: "24 Fev",
        title: "Consultoria Estratégica - Projeto X",
        category: "Serviço",
        status: "paid",
        gross: "R$ 1.200,00",
        costTotal: "- R$ 180,00",
        costBreakdown: "Software (R$ 80) + Deslocamento (R$ 100)",
        net: "R$ 1.020,00",
    },
    {
        date: "22 Fev",
        title: "Desenvolvimento de Landing Page",
        category: "Serviço",
        status: "paid",
        gross: "R$ 2.500,00",
        costTotal: "- R$ 450,00",
        costBreakdown: "Assets Premium (R$ 150) + Freelancer Apoio (R$ 300)",
        net: "R$ 2.050,00",
    },
    {
        date: "20 Fev",
        title: "Manutenção de Servidores (Mensal)",
        category: "Serviço",
        status: "pending",
        gross: "R$ 800,00",
        costTotal: "- R$ 120,00",
        costBreakdown: "Hospedagem Dedicada",
        net: "R$ 680,00",
    },
    {
        date: "18 Fev",
        title: "Kit de Manuais Técnicos (Impressos)",
        category: "Venda de Item",
        status: "paid",
        gross: "R$ 350,00",
        costTotal: "- R$ 210,00",
        costBreakdown: "Gráfica (R$ 160) + Embalagem/Frete (R$ 50)",
        net: "R$ 140,00",
    },
];

export default function ReceitasPage() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <main className="content" id="receitas-content">
                <div className="header-actions" id="receitas-header">
                    <div>
                        <h2 className="page-title">Receitas & Vendas</h2>
                        <p className="page-subtitle">
                            Detalhamento de entradas e margens por serviço/produto.
                        </p>
                    </div>
                    <div className="whatsapp-sync" id="whatsapp-status">
                        ● Sincronizado com WhatsApp (Há 5 min)
                    </div>
                </div>

                <div className="sales-container" id="sales-table-container">
                    <table className="sales-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição do Serviço / Item</th>
                                <th>Status</th>
                                <th>Valor Bruto</th>
                                <th>Custos Diretos</th>
                                <th>Resultado Líquido</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData.map((sale, index) => (
                                <tr key={index} id={`sale-row-${index}`}>
                                    <td>{sale.date}</td>
                                    <td>
                                        <div className="item-info">
                                            <span className="item-title">{sale.title}</span>
                                            <span className="item-category">{sale.category}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                            className={`badge ${sale.status === "paid"
                                                    ? "badge-paid"
                                                    : "badge-pending"
                                                }`}
                                        >
                                            {sale.status === "paid" ? "Recebido" : "Pendente"}
                                        </span>
                                    </td>
                                    <td className="value-gross">{sale.gross}</td>
                                    <td>
                                        <span className="value-cost">{sale.costTotal}</span>
                                        <div className="cost-breakdown">{sale.costBreakdown}</div>
                                    </td>
                                    <td className="value-net">{sale.net}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="metric-cards" id="receitas-metrics">
                    <div className="metric-card">
                        <h4>Ticket Médio Líquido</h4>
                        <span className="metric-value">R$ 972,50</span>
                    </div>
                    <div className="metric-card">
                        <h4>Margem de Contribuição Média</h4>
                        <span className="metric-value" style={{ color: "var(--primary)" }}>
                            78,4%
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
}
