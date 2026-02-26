import Sidebar from "../components/Sidebar";

interface Customer {
    name: string;
    doc: string;
    docType: "CPF" | "CNPJ";
    totalBilling: string;
}

interface Invoice {
    number: string;
    date: string;
    client: string;
    value: string;
    status: string;
}

const customers: Customer[] = [
    {
        name: "Tech Soluções Ltda",
        doc: "12.345.678/0001-90",
        docType: "CNPJ",
        totalBilling: "R$ 15.400,00",
    },
    {
        name: "Ana Beatriz Silva",
        doc: "123.456.789-00",
        docType: "CPF",
        totalBilling: "R$ 4.200,00",
    },
    {
        name: "Agência Criativa S.A",
        doc: "98.765.432/0001-10",
        docType: "CNPJ",
        totalBilling: "R$ 2.850,00",
    },
];

const recentInvoices: Invoice[] = [
    {
        number: "#104",
        date: "24/02",
        client: "Tech Soluções",
        value: "R$ 1.200,00",
        status: "Emitida (XML/PDF)",
    },
    {
        number: "#103",
        date: "15/02",
        client: "Ana Beatriz",
        value: "R$ 450,00",
        status: "Emitida (XML/PDF)",
    },
];

export default function NotasFiscaisPage() {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <main className="content" id="notas-fiscais-content">
                <header className="welcome-header">
                    <h2 className="page-title">Central de Notas Fiscais</h2>
                    <p className="page-subtitle">
                        Gerencie seus clientes e automatize sua emissão via IA.
                    </p>
                </header>

                <div className="nf-main-grid" id="nf-grid">
                    {/* Client Table Section */}
                    <section className="card" id="client-table-section">
                        <h3 className="card-title">
                            <span>👥</span> Base de Clientes (Top Faturamento)
                        </h3>
                        <table className="customer-table">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>CPF / CNPJ</th>
                                    <th>Total em Notas</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => (
                                    <tr key={index} id={`customer-row-${index}`}>
                                        <td>
                                            <span className="customer-name">
                                                {customer.name}
                                            </span>
                                            <span className="customer-doc">
                                                {customer.doc}
                                            </span>
                                        </td>
                                        <td>{customer.docType}</td>
                                        <td>
                                            <span className="billing-badge">
                                                {customer.totalBilling}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="emit-btn" id={`emit-nf-${index}`}>
                                                Nova NF
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="insight-box">
                            <p>
                                <strong>💡 Dica do ME.Conta:</strong> O cliente{" "}
                                <strong>Tech Soluções Ltda</strong> representa 65% do
                                seu faturamento neste trimestre. Considere oferecer um
                                contrato recorrente!
                            </p>
                        </div>
                    </section>

                    {/* Right Column: Form + AI Card */}
                    <section className="nf-right-column">
                        <div className="card" id="new-client-form">
                            <h3 className="card-title">
                                <span>✨</span> Cadastrar Novo Cliente
                            </h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="client-name">Nome ou Razão Social</label>
                                    <input
                                        type="text"
                                        id="client-name"
                                        placeholder="Ex: João da Silva ou Empresa XYZ"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="client-doc">CPF ou CNPJ</label>
                                    <input
                                        type="text"
                                        id="client-doc"
                                        placeholder="00.000.000/0000-00"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="client-email">E-mail (Para envio da NF)</label>
                                    <input
                                        type="email"
                                        id="client-email"
                                        placeholder="cliente@email.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="client-im">Inscrição Municipal (Opcional)</label>
                                    <input
                                        type="text"
                                        id="client-im"
                                        placeholder="1234567-8"
                                    />
                                </div>
                                <button type="button" className="btn btn-primary" id="save-client-btn">
                                    Salvar e Habilitar IA
                                </button>
                            </form>
                        </div>

                        <div className="card card-dark" id="ai-whatsapp-card">
                            <h3 className="card-dark-title">🤖 IA Faturista via WhatsApp</h3>
                            <p className="card-dark-text">
                                Após salvar o cliente, você pode apenas dizer no WhatsApp:
                                <br /><br />
                                <em>
                                    &quot;Emita uma nota de R$ 500 para Tech Soluções sobre
                                    serviço de consultoria.&quot;
                                </em>
                            </p>
                        </div>
                    </section>
                </div>

                {/* Recent Invoices */}
                <section className="card nf-recent-section" id="recent-invoices">
                    <h3 className="card-title" style={{ marginBottom: "1rem" }}>
                        📜 Últimas Notas Emitidas
                    </h3>
                    {recentInvoices.map((invoice, index) => (
                        <div key={index} className="invoice-row" id={`invoice-${index}`}>
                            <span className="invoice-info">
                                NF {invoice.number} - {invoice.date} - {invoice.client}
                            </span>
                            <span className="invoice-value">{invoice.value}</span>
                            <span className="invoice-status">{invoice.status}</span>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
