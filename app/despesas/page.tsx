import Sidebar from "../components/Sidebar";

interface FixedExpense {
    item: string;
    tag: string;
    dueDate: string;
    criteria: "vital" | "strategic" | "optional";
    value: string;
    highlight?: boolean;
}

interface VariableExpense {
    item: string;
    tag: string;
    frequency: string;
    impact: string;
    value: string;
}

const fixedExpenses: FixedExpense[] = [
    {
        item: "DAS MEI",
        tag: "Impostos",
        dueDate: "Todo dia 20",
        criteria: "vital",
        value: "R$ 72,00",
    },
    {
        item: "Assinatura ChatGPT / IA",
        tag: "Ferramentas",
        dueDate: "Todo dia 05",
        criteria: "strategic",
        value: "R$ 110,00",
    },
    {
        item: "Plano de Internet Fiber",
        tag: "Infra",
        dueDate: "Todo dia 12",
        criteria: "vital",
        value: "R$ 150,00",
    },
    {
        item: "Software de Gestão (Old)",
        tag: "Legacy",
        dueDate: "Todo dia 28",
        criteria: "optional",
        value: "R$ 190,00",
        highlight: true,
    },
];

const variableExpenses: VariableExpense[] = [
    {
        item: "Compra de Insumos - Projeto Alpha",
        tag: "Produção",
        frequency: "15 Fev",
        impact: "Alto (Escalável)",
        value: "R$ 850,00",
    },
    {
        item: "Anúncios Instagram/Facebook",
        tag: "Marketing",
        frequency: "Semanal",
        impact: "Médio (Crescimento)",
        value: "R$ 320,00",
    },
    {
        item: "Logística e Entregas",
        tag: "Operacional",
        frequency: "Por demanda",
        impact: "Baixo (Repassado)",
        value: "R$ 158,00",
    },
];

const criteriaLabels: Record<string, { label: string; className: string }> = {
    vital: { label: "Vital", className: "badge-vital" },
    strategic: { label: "Estratégico", className: "badge-strategic" },
    optional: { label: "Opcional", className: "badge-optional" },
};

export default function DespesasPage() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <main className="content" id="despesas-content">
                <header className="welcome-header">
                    <h2 className="page-title">Gestão de Despesas</h2>
                    <p className="page-subtitle">
                        Controle de custos fixos e variáveis com foco em eficiência.
                    </p>
                </header>

                <div className="expense-summary" id="expense-summary">
                    <div className="summary-card summary-card-fixed">
                        <h4>Total Fixas (Custo de Existir)</h4>
                        <div className="summary-value">
                            R$ 522,00{" "}
                            <small>/mês</small>
                        </div>
                    </div>
                    <div className="summary-card summary-card-variable">
                        <h4>Total Variáveis (Custo de Operação)</h4>
                        <div className="summary-value">
                            R$ 1.328,00{" "}
                            <small>neste mês</small>
                        </div>
                    </div>
                </div>

                {/* Fixed Expenses Section */}
                <section className="expense-section" id="fixed-expenses">
                    <div className="section-header">
                        <h3>📌 Despesas Fixas</h3>
                        <span className="section-status success">✔ Gastos sob controle</span>
                    </div>
                    <table className="expense-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Vencimento</th>
                                <th>Critério IA</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fixedExpenses.map((expense, index) => (
                                <tr key={index} id={`fixed-expense-${index}`}>
                                    <td>
                                        {expense.item}{" "}
                                        <span className="cat-tag">{expense.tag}</span>
                                    </td>
                                    <td>{expense.dueDate}</td>
                                    <td>
                                        <span
                                            className={`badge ${criteriaLabels[expense.criteria].className}`}
                                        >
                                            {criteriaLabels[expense.criteria].label}
                                        </span>
                                    </td>
                                    <td
                                        style={{
                                            fontWeight: 600,
                                            color: expense.highlight
                                                ? "var(--danger)"
                                                : undefined,
                                        }}
                                    >
                                        {expense.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Variable Expenses Section */}
                <section className="expense-section" id="variable-expenses">
                    <div className="section-header section-header-warning">
                        <h3>📊 Despesas Variáveis</h3>
                        <span className="section-status muted">
                            Proporcional ao volume de vendas
                        </span>
                    </div>
                    <table className="expense-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Data/Frequência</th>
                                <th>Impacto na Margem</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {variableExpenses.map((expense, index) => (
                                <tr key={index} id={`variable-expense-${index}`}>
                                    <td>
                                        {expense.item}{" "}
                                        <span className="cat-tag">{expense.tag}</span>
                                    </td>
                                    <td>{expense.frequency}</td>
                                    <td style={{ color: "var(--text-muted)" }}>
                                        {expense.impact}
                                    </td>
                                    <td style={{ fontWeight: 600 }}>{expense.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* AI Insight */}
                <div className="ai-insight-card" id="despesas-ai-insight">
                    <h4>Reflexão da ME.Conta:</h4>
                    <p>
                        Suas despesas fixas somam <strong>10%</strong> do seu faturamento médio.
                        Isso é excelente! No entanto, identifiquei uma despesa &quot;Opcional&quot; de
                        R$ 190,00 que não tem sido utilizada. Cancelá-la aumentaria seu lucro
                        líquido anual em <strong>R$ 2.280,00</strong>.
                    </p>
                </div>
            </main>
        </div>
    );
}
