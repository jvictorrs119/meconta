interface DreItem {
    label: string;
    value: string;
    isExpense?: boolean;
    isTotal?: boolean;
}

const dreData: DreItem[] = [
    { label: "Receitas de Serviços", value: "R$ 5.240,00" },
    { label: "Custos Variáveis", value: "- R$ 1.400,00", isExpense: true },
    { label: "Custos Fixos", value: "- R$ 450,00", isExpense: true },
    { label: "Impostos (DAS)", value: "- R$ 72,00", isExpense: true },
    { label: "Lucro Real", value: "R$ 3.318,00", isTotal: true },
];

export default function DreSection() {
    return (
        <section className="side-section" id="dre-section">
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Resumo DRE (Fev)</h3>

            <div className="dre-list">
                {dreData.map((item, index) => (
                    <div
                        key={index}
                        className={`dre-item ${item.isTotal ? "total" : ""}`}
                    >
                        <span>{item.label}</span>
                        <span
                            style={
                                item.isExpense
                                    ? { color: "var(--danger)" }
                                    : item.isTotal
                                        ? { color: "var(--success)" }
                                        : undefined
                            }
                        >
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>

            <div className="ai-tip">
                <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    Dica da IA
                </h4>
                <p>
                    Seu ritmo atual sugere que você atingirá o teto anual em Outubro.
                    Considere planejar a transição para ME no 2º semestre.
                </p>
            </div>
        </section>
    );
}
