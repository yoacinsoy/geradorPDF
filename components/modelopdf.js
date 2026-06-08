import { Document, Page, StyleSheet, Text, View, Font } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
    pagina: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
    },

    colunaEsquerda: {
        flex: 1,
        padding: 20,
        paddingTop: 25,
        backgroundColor: "#fafafa",
        borderRight: "1 solid #e0e0e0",
    },

    nome: { fontSize: 20, fontWeight: "bold", color: "#2c3e50", letterSpacing: 0.5 },
    cargo: { fontSize: 11, color: "#7f8c8d", marginTop: 3, fontWeight: "medium" },
    divisor: {
        height: 1,
        backgroundColor: "#bdc3c7",
        marginVertical: 10,
    },

    secaoTitulo: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#2c3e50",
        textTransform: "uppercase",
        letterSpacing: 1.2,
        marginBottom: 6,
        marginTop: 12,
    },

    formacaoBloco: { marginBottom: 6 },
    formacaoCurso: { fontSize: 10, fontWeight: "bold", color: "#2c3e50" },
    formacaoPeriodo: { fontSize: 8, color: "#888", marginTop: 1 },
    formacaoDescricao: { fontSize: 8, color: "#444", marginTop: 2, lineHeight: 1.4 },

    habilidadeItem: { fontSize: 8, color: "#333", marginBottom: 3, lineHeight: 1.5 },
    bullet: {
        width: 3,
        height: 3,
        backgroundColor: "#7f8c8d",
        borderRadius: 2,
        marginRight: 5,
        marginTop: 4,
    },
    habilidadeRow: { flexDirection: "row", alignItems: "flex-start" },

    contatoColuna: {},
    contatoItem: { fontSize: 8, color: "#555", marginBottom: 2 },

    colunaDireita: {
        flex: 1,
        padding: 20,
        paddingTop: 25,
    },

    linhaGrade: { fontSize: 8, color: "#333", marginBottom: 3, lineHeight: 1.5 },
    label: { fontWeight: "bold", color: "#2c3e50" },

    cursoBloco: { marginBottom: 5 },
    cursoNome: { fontSize: 9, fontWeight: "bold", color: "#2c3e50" },
    cursoDetalhe: { fontSize: 8, color: "#666", marginTop: 1 },

    idiomaLinha: { fontSize: 8, color: "#333", marginBottom: 2, lineHeight: 1.5 },
    idiomaNome: { fontWeight: "bold", color: "#2c3e50" },
});

export default function ModeloPDF() {
    return (
        <Document>
            <Page size="A4" style={estilos.pagina}>
                <View style={estilos.colunaEsquerda}>
                    <Text style={estilos.nome}>Wallace H. Carneiro</Text>
                    <Text style={estilos.cargo}>Desenvolvedor Web</Text>

                    <View style={estilos.divisor} />

                    <View style={estilos.contatoColuna}>
                        <Text style={estilos.contatoItem}>contato.wallace.carneiro@gmail.com</Text>
                        <Text style={estilos.contatoItem}>(35) 99768-5832</Text>
                        <Text style={estilos.contatoItem}>Lavras, MG</Text>
                        <Text style={estilos.contatoItem}>washonrails</Text>
                    </View>

                    <Text style={estilos.secaoTitulo}>FORMAÇÃO</Text>
                    <View style={estilos.formacaoBloco}>
                        <Text style={estilos.formacaoCurso}>Desenvolvimento de Sistemas</Text>
                        <Text style={estilos.formacaoPeriodo}>SENAC | 02/2026 – 11/2027 | Lavras</Text>
                        <Text style={estilos.formacaoDescricao}>
                            Análise de requisitos, lógica e algoritmos, programação estruturada e OO,
                            desenvolvimento web, desktop e mobile, modelagem de BD, testes, manutenção.
                        </Text>
                    </View>
                    <View style={estilos.formacaoBloco}>
                        <Text style={estilos.formacaoCurso}>Técnico Em Informática</Text>
                        <Text style={estilos.formacaoPeriodo}>SENAC | 02/2025 – 06/2026 | Lavras</Text>
                        <Text style={estilos.formacaoDescricao}>
                            Manutenção de computadores, redes e servidores, fundamentos de programação,
                            lógica e algoritmos, banco de dados e análise de dados.
                        </Text>
                    </View>

                    <Text style={estilos.secaoTitulo}>HABILIDADES</Text>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Cypress e Playwright</Text> — 2 anos:
                            automação de testes Web e API.
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Postman</Text> — 2 anos: testes e
                            validação de APIs.
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>SQL</Text> — 2 anos: consultas e
                            validação de dados (MySQL, PostgreSQL, SQL Server).
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Git, GitHub, GitLab</Text> — 2 anos:
                            versionamento e CI/CD.
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Linux, Windows, MacOS</Text> — 2 anos:
                            suporte a ambientes de testes.
                        </Text>
                    </View>
                </View>

                <View style={estilos.colunaDireita}>
                    <Text style={estilos.secaoTitulo}>COMPETÊNCIAS</Text>
                    <Text style={estilos.linhaGrade}>
                        <Text style={estilos.label}>Linguagens: </Text>
                        JavaScript, PHP, Delphi, Shell Script.
                    </Text>
                    <Text style={estilos.linhaGrade}>
                        <Text style={estilos.label}>Bancos de Dados: </Text>
                        PostgreSQL, SQL Server, Redis, MongoDB.
                    </Text>
                    <Text style={estilos.linhaGrade}>
                        <Text style={estilos.label}>Ferramentas: </Text>
                        Git, GitHub, GitLab, Docker, CI/CD, Postman, Cypress, Playwright.
                    </Text>
                    <Text style={estilos.linhaGrade}>
                        <Text style={estilos.label}>Metodologias: </Text>
                        BDD, TDD, SOLID, Clean Code, Scrum, Kanban.
                    </Text>
                    <Text style={estilos.linhaGrade}>
                        <Text style={estilos.label}>Redes: </Text>
                        LAN, VLAN, DHCP, NAT, IPv4/IPv6, Cisco Packet Tracer.
                    </Text>

                    <Text style={estilos.secaoTitulo}>CURSOS</Text>
                    <View style={estilos.cursoBloco}>
                        <Text style={estilos.cursoNome}>Cisco CCNA</Text>
                        <Text style={estilos.cursoDetalhe}>Presente - CISCO</Text>
                    </View>
                    <View style={estilos.cursoBloco}>
                        <Text style={estilos.cursoNome}>Cibersegurança (Governança)</Text>
                        <Text style={estilos.cursoDetalhe}>10/2024 - FIAP</Text>
                    </View>
                    <View style={estilos.cursoBloco}>
                        <Text style={estilos.cursoNome}>Analista SOC</Text>
                        <Text style={estilos.cursoDetalhe}>10/2024 - IBSEC</Text>
                    </View>
                    <View style={estilos.cursoBloco}>
                        <Text style={estilos.cursoNome}>Certificado em Inglês B1</Text>
                        <Text style={estilos.cursoDetalhe}>12/2021 - EF Standard English Test</Text>
                    </View>

                    <Text style={estilos.secaoTitulo}>IDIOMAS</Text>
                    <Text style={estilos.idiomaLinha}>
                        <Text style={estilos.idiomaNome}>Português</Text> - Nativo (C2)
                    </Text>
                    <Text style={estilos.idiomaLinha}>
                        <Text style={estilos.idiomaNome}>Inglês</Text> - B1 (Boa leitura de documentação
                        técnica e compreensão auditiva)
                    </Text>
                </View>
            </Page>
        </Document>
    );
}
