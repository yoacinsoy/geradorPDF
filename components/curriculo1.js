import { Document, Page, StyleSheet, Text, View, Font } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
    pagina: {
        flexDirection: "row",
        backgroundColor: "#ffffff",
    },

    conteudoPrincipal: {
        flex: 7,
        padding: 25,
    },

    nome: { fontSize: 24, fontWeight: "bold", color: "#1a1a2e", letterSpacing: 1 },
    cargo: { fontSize: 13, color: "#2c3e50", marginTop: 3, fontWeight: "medium" },
    contatoRow: { flexDirection: "row", marginTop: 6, flexWrap: "wrap" },
    contatoItem: { fontSize: 9, color: "#555", marginRight: 14, marginBottom: 2 },

    secaoTitulo: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#1a1a2e",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        borderBottom: "1.5 solid #2c3e50",
        paddingBottom: 3,
        marginTop: 14,
        marginBottom: 8,
    },

    formacaoBloco: { marginBottom: 7 },
    formacaoCurso: { fontSize: 11, fontWeight: "bold", color: "#1a1a2e" },
    formacaoPeriodo: { fontSize: 9, color: "#888", marginTop: 1 },
    formacaoDescricao: { fontSize: 9, color: "#444", marginTop: 2, lineHeight: 1.4 },

    habilidadeItem: { fontSize: 9, color: "#333", marginBottom: 3, lineHeight: 1.5 },
    bullet: { width: 3, height: 3, backgroundColor: "#2c3e50", borderRadius: 2, marginRight: 5, marginTop: 4 },
    habilidadeRow: { flexDirection: "row", alignItems: "flex-start" },

    sidebar: {
        flex: 3,
        backgroundColor: "#1e2a3a",
        padding: 20,
        paddingTop: 35,
    },
    sidebarSecaoTitulo: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#e8c87a",
        textTransform: "uppercase",
        letterSpacing: 1.5,
        borderBottom: "1 solid #e8c87a",
        paddingBottom: 3,
        marginBottom: 8,
        marginTop: 16,
    },
    sidebarTexto: { fontSize: 9, color: "#ccc", marginBottom: 4, lineHeight: 1.5 },
    sidebarLabel: { fontWeight: "bold", color: "#e8c87a" },
    sidebarItem: { fontSize: 9, color: "#ccc", marginBottom: 3, lineHeight: 1.5 },

    sidebarCursoNome: { fontWeight: "bold", color: "#fff", fontSize: 9 },
    sidebarCursoLinha: { fontSize: 8, color: "#bbb", marginBottom: 4, lineHeight: 1.4 },
    sidebarIdiomaLinha: { fontSize: 9, color: "#ccc", marginBottom: 3, lineHeight: 1.5 },
    sidebarIdiomaNome: { fontWeight: "bold", color: "#e8c87a" },
});

export default function Curriculo1() {
    return (
        <Document>
            <Page size="A4" style={estilos.pagina}>
                <View style={estilos.conteudoPrincipal}>
                    <Text style={estilos.nome}>Wallace Henrique Carneiro</Text>
                    <Text style={estilos.cargo}>Desenvolvedor Web</Text>
                    <View style={estilos.contatoRow}>
                        <Text style={estilos.contatoItem}>contato.wallace.carneiro@gmail.com</Text>
                        <Text style={estilos.contatoItem}>(35) 99768-5832</Text>
                        <Text style={estilos.contatoItem}>Lavras, MG</Text>
                        <Text style={estilos.contatoItem}>washonrails</Text>
                    </View>

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

                    <Text style={estilos.secaoTitulo}>HABILIDADES TÉCNICAS</Text>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Cypress e Playwright</Text> — 2 anos de
                            experiência (nível intermediário/avançado): automação de testes Web e API.
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Postman</Text> — 2 anos de experiência
                            (nível avançado): testes e validação de APIs.
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>SQL (MySQL, PostgreSQL, SQL Server)</Text> — 2
                            anos de experiência (nível avançado): consultas e validação de dados.
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Git, GitHub, GitLab</Text> — 2 anos de
                            experiência (nível avançado): versionamento de código e integração com CI/CD.
                        </Text>
                    </View>
                    <View style={estilos.habilidadeRow}>
                        <View style={estilos.bullet} />
                        <Text style={estilos.habilidadeItem}>
                            <Text style={{ fontWeight: "bold" }}>Linux, Windows e MacOS</Text> — 2 anos de
                            experiência (nível avançado): execução e suporte a ambientes de testes.
                        </Text>
                    </View>
                </View>

                <View style={estilos.sidebar}>
                    <Text style={estilos.sidebarSecaoTitulo}>COMPETÊNCIAS</Text>
                    <Text style={estilos.sidebarTexto}>
                        <Text style={estilos.sidebarLabel}>Linguagens: </Text>
                        JavaScript, PHP, Delphi, Shell Script (BASH).
                    </Text>
                    <Text style={estilos.sidebarTexto}>
                        <Text style={estilos.sidebarLabel}>Bancos de Dados: </Text>
                        PostgreSQL, SQL Server, Redis, MongoDB.
                    </Text>
                    <Text style={estilos.sidebarTexto}>
                        <Text style={estilos.sidebarLabel}>Ferramentas: </Text>
                        Git, GitHub, GitLab, Docker, CI/CD, Postman, Cypress, Playwright, Microsoft Teams.
                    </Text>
                    <Text style={estilos.sidebarTexto}>
                        <Text style={estilos.sidebarLabel}>Metodologias: </Text>
                        BDD, TDD, SOLID, Clean Code, Scrum, Kanban.
                    </Text>
                    <Text style={estilos.sidebarTexto}>
                        <Text style={estilos.sidebarLabel}>Redes e Infraestrutura: </Text>
                        LAN, VLAN, DHCP, NAT, IPv4/IPv6, Cisco Packet Tracer.
                    </Text>

                    <Text style={estilos.sidebarSecaoTitulo}>CURSOS</Text>
                    <Text style={estilos.sidebarCursoLinha}>
                        <Text style={estilos.sidebarCursoNome}>Cisco CCNA</Text>
                        {"\n"}Presente - CISCO
                    </Text>
                    <Text style={estilos.sidebarCursoLinha}>
                        <Text style={estilos.sidebarCursoNome}>
                            Certificado Profissional em Analista de Cibersegurança (Governança)
                        </Text>
                        {"\n"}10/2024 - FIAP
                    </Text>
                    <Text style={estilos.sidebarCursoLinha}>
                        <Text style={estilos.sidebarCursoNome}>Certificado Profissional em Analista SOC</Text>
                        {"\n"}10/2024 - IBSEC
                    </Text>
                    <Text style={estilos.sidebarCursoLinha}>
                        <Text style={estilos.sidebarCursoNome}>Certificado em Inglês B1</Text>
                        {"\n"}12/2021 - EF Standard English Test
                    </Text>

                    <Text style={estilos.sidebarSecaoTitulo}>IDIOMAS</Text>
                    <Text style={estilos.sidebarIdiomaLinha}>
                        <Text style={estilos.sidebarIdiomaNome}>Português</Text> - Nativo (C2)
                    </Text>
                    <Text style={estilos.sidebarIdiomaLinha}>
                        <Text style={estilos.sidebarIdiomaNome}>Inglês</Text> - B1 (Boa leitura de
                        documentação técnica e compreensão auditiva)
                    </Text>
                </View>
            </Page>
        </Document>
    );
}
