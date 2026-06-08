import { Document, Page, StyleSheet, Text, View, Font } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
    pagina: { backgroundColor: "#f5f6fa", padding: 0 },

    // ---- HEADER COLORIDO (TOPO) ----
    header: {
        backgroundColor: "#1a5276",
        padding: 25,
        paddingBottom: 18,
    },
    nome: { fontSize: 26, fontWeight: "bold", color: "#ffffff", letterSpacing: 1 },
    cargo: { fontSize: 13, color: "#85c1e9", marginTop: 3, fontWeight: "medium" },
    headerContatoRow: { flexDirection: "row", marginTop: 10, flexWrap: "wrap" },
    headerContatoItem: { fontSize: 9, color: "#d5dbdb", marginRight: 18, marginBottom: 2 },

    // ---- CONTEÚDO ABAIXO DO HEADER ----
    conteudo: {
        padding: 25,
    },

    // Coluna única com seções alternando fundo
    coluna: {},

    secaoCard: {
        backgroundColor: "#ffffff",
        padding: 14,
        marginBottom: 10,
        borderRadius: 0,
        // Sombra simulada com borda sutil
        borderLeft: "3 solid #1a5276",
    },
    secaoTitulo: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#1a5276",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        borderBottom: "1 solid #d5dbdb",
        paddingBottom: 4,
        marginBottom: 8,
    },

    formacaoBloco: { marginBottom: 6 },
    formacaoCurso: { fontSize: 11, fontWeight: "bold", color: "#2c3e50" },
    formacaoPeriodo: { fontSize: 9, color: "#888", marginTop: 1 },
    formacaoDescricao: { fontSize: 9, color: "#444", marginTop: 2, lineHeight: 1.4 },

    habilidadeItem: { fontSize: 9, color: "#333", marginBottom: 3, lineHeight: 1.5 },
    bullet: {
        width: 4,
        height: 4,
        backgroundColor: "#1a5276",
        borderRadius: 2,
        marginRight: 6,
        marginTop: 4,
    },
    habilidadeRow: { flexDirection: "row", alignItems: "flex-start" },

    gridRow: { flexDirection: "row", marginBottom: 2 },
    gridCol: { flex: 1, paddingRight: 8 },
    competenciaLinha: { fontSize: 9, color: "#333", marginBottom: 2, lineHeight: 1.5 },
    competenciaLabel: { fontWeight: "bold", color: "#1a5276" },

    cursosRow: { flexDirection: "row", flexWrap: "wrap" },
    cursoCard: {
        width: "48%",
        marginBottom: 6,
        marginRight: "2%",
        padding: 8,
        backgroundColor: "#f0f4f8",
        borderRadius: 0,
    },
    cursoNome: { fontSize: 9, fontWeight: "bold", color: "#1a5276" },
    cursoDetalhe: { fontSize: 8, color: "#666", marginTop: 1 },

    idiomaBadge: { fontSize: 9, color: "#333", marginBottom: 3, lineHeight: 1.5 },
    idiomaNome: { fontWeight: "bold", color: "#1a5276" },
});

export default function Curriculo3() {
    return (
        <Document>
            <Page size="A4" style={estilos.pagina}>
                <View style={estilos.header}>
                    <Text style={estilos.nome}>Wallace Henrique Carneiro</Text>
                    <Text style={estilos.cargo}>Desenvolvedor Web</Text>
                    <View style={estilos.headerContatoRow}>
                        <Text style={estilos.headerContatoItem}>contato.wallace.carneiro@gmail.com</Text>
                        <Text style={estilos.headerContatoItem}>(35) 99768-5832</Text>
                        <Text style={estilos.headerContatoItem}>Lavras, MG</Text>
                        <Text style={estilos.headerContatoItem}>washonrails</Text>
                    </View>
                </View>

                <View style={estilos.conteudo}>
                    <View style={estilos.secaoCard}>
                        <Text style={estilos.secaoTitulo}>FORMAÇÃO ACADÊMICA</Text>
                        <View style={estilos.formacaoBloco}>
                            <Text style={estilos.formacaoCurso}>Desenvolvimento de Sistemas - SENAC</Text>
                            <Text style={estilos.formacaoPeriodo}>02/2026 – 11/2027 | Lavras</Text>
                            <Text style={estilos.formacaoDescricao}>
                                Formação voltada ao desenvolvimento de software, incluindo análise de requisitos,
                                lógica e algoritmos, programação estruturada e orientada a objetos, desenvolvimento
                                web, desktop e mobile, modelagem de banco de dados, testes, manutenção de aplicações
                                e suporte ao usuário.
                            </Text>
                        </View>
                        <View style={estilos.formacaoBloco}>
                            <Text style={estilos.formacaoCurso}>Técnico Em Informática - SENAC</Text>
                            <Text style={estilos.formacaoPeriodo}>02/2025 – 06/2026 | Lavras</Text>
                            <Text style={estilos.formacaoDescricao}>
                                Formação em manutenção de computadores, redes e servidores, fundamentos de
                                programação, lógica e algoritmos, banco de dados e análise de dados.
                            </Text>
                        </View>
                    </View>

                    <View style={estilos.secaoCard}>
                        <Text style={estilos.secaoTitulo}>HABILIDADES TÉCNICAS</Text>
                        <View style={estilos.habilidadeRow}>
                            <View style={estilos.bullet} />
                            <Text style={estilos.habilidadeItem}>
                                <Text style={{ fontWeight: "bold" }}>Cypress e Playwright</Text> — 2 anos de
                                experiência: automação de testes Web e API.
                            </Text>
                        </View>
                        <View style={estilos.habilidadeRow}>
                            <View style={estilos.bullet} />
                            <Text style={estilos.habilidadeItem}>
                                <Text style={{ fontWeight: "bold" }}>Postman</Text> — 2 anos de experiência:
                                testes e validação de APIs.
                            </Text>
                        </View>
                        <View style={estilos.habilidadeRow}>
                            <View style={estilos.bullet} />
                            <Text style={estilos.habilidadeItem}>
                                <Text style={{ fontWeight: "bold" }}>SQL (MySQL, PostgreSQL, SQL Server)</Text> — 2
                                anos de experiência: consultas e validação de dados.
                            </Text>
                        </View>
                        <View style={estilos.habilidadeRow}>
                            <View style={estilos.bullet} />
                            <Text style={estilos.habilidadeItem}>
                                <Text style={{ fontWeight: "bold" }}>Git, GitHub, GitLab</Text> — 2 anos de
                                experiência: versionamento de código e integração com CI/CD.
                            </Text>
                        </View>
                        <View style={estilos.habilidadeRow}>
                            <View style={estilos.bullet} />
                            <Text style={estilos.habilidadeItem}>
                                <Text style={{ fontWeight: "bold" }}>Linux, Windows e MacOS</Text> — 2 anos de
                                experiência: execução e suporte a ambientes de testes.
                            </Text>
                        </View>
                    </View>

                    <View style={estilos.secaoCard}>
                        <Text style={estilos.secaoTitulo}>COMPETÊNCIAS E FERRAMENTAS</Text>
                        <View style={estilos.gridRow}>
                            <View style={estilos.gridCol}>
                                <Text style={estilos.competenciaLinha}>
                                    <Text style={estilos.competenciaLabel}>Linguagens: </Text>
                                    JavaScript, PHP, Delphi, Shell Script.
                                </Text>
                                <Text style={estilos.competenciaLinha}>
                                    <Text style={estilos.competenciaLabel}>Bancos de Dados: </Text>
                                    PostgreSQL, SQL Server, Redis, MongoDB.
                                </Text>
                            </View>
                            <View style={estilos.gridCol}>
                                <Text style={estilos.competenciaLinha}>
                                    <Text style={estilos.competenciaLabel}>Ferramentas: </Text>
                                    Git, GitHub, GitLab, Docker, CI/CD, Postman, Cypress, Playwright.
                                </Text>
                                <Text style={estilos.competenciaLinha}>
                                    <Text style={estilos.competenciaLabel}>Metodologias: </Text>
                                    BDD, TDD, SOLID, Clean Code, Scrum, Kanban.
                                </Text>
                                <Text style={estilos.competenciaLinha}>
                                    <Text style={estilos.competenciaLabel}>Redes: </Text>
                                    LAN, VLAN, DHCP, NAT, IPv4/IPv6, Cisco Packet Tracer.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View style={[estilos.secaoCard, { flex: 1, marginRight: 5 }]}>
                            <Text style={estilos.secaoTitulo}>CURSOS</Text>
                            <Text style={estilos.cursoNome}>Cisco CCNA</Text>
                            <Text style={estilos.cursoDetalhe}>Presente - CISCO</Text>
                            <Text style={[estilos.cursoNome, { marginTop: 5 }]}>
                                Cibersegurança (Governança)
                            </Text>
                            <Text style={estilos.cursoDetalhe}>10/2024 - FIAP</Text>
                            <Text style={[estilos.cursoNome, { marginTop: 5 }]}>Analista SOC</Text>
                            <Text style={estilos.cursoDetalhe}>10/2024 - IBSEC</Text>
                            <Text style={[estilos.cursoNome, { marginTop: 5 }]}>Certificado em Inglês B1</Text>
                            <Text style={estilos.cursoDetalhe}>12/2021 - EF Standard English Test</Text>
                        </View>
                        <View style={[estilos.secaoCard, { flex: 1, marginLeft: 5 }]}>
                            <Text style={estilos.secaoTitulo}>IDIOMAS</Text>
                            <Text style={estilos.idiomaBadge}>
                                <Text style={estilos.idiomaNome}>Português</Text> - Nativo (C2)
                            </Text>
                            <Text style={estilos.idiomaBadge}>
                                <Text style={estilos.idiomaNome}>Inglês</Text> - B1 (Boa leitura de documentação
                                técnica e compreensão auditiva)
                            </Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
}
