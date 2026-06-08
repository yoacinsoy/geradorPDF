import { Document, Page, StyleSheet, Text, View, Image } from "@react-pdf/renderer";

const estilos = StyleSheet.create({
    pagina: {
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 30,
        fontFamily: "Helvetica",
    },

    topoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    cardTopoEsquerdo: {
        width: "48%",
        borderRadius: 8,
        padding: 15,
    },
    gridItens: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    quadradoItem: {
        width: "46%",
        height: 50,
        backgroundColor: "#e2e8f0",
        borderRadius: 6,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    imagemQuadradinho: {
        width: 30,
        height: 30,
        objectFit: "contain",
    },

    cardTopoDireito: {
        width: "48%",
        borderRadius: 8,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    tituloCirculos: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#2c1810",
        marginBottom: 12,
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    circulosContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        alignItems: "center",
    },
    circuloWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
    circulo: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        borderWidth: 2,
        borderColor: "#e2e8f0",
        backgroundColor: "#e2e8f0",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    logoImagem: {
        width: 35,
        height: 35,
        objectFit: "contain",
    },
    qtdTitulo: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#2c1810",
        marginTop: 4,
        textAlign: "center",
    },
    nomeSelecao: {
        fontSize: 7,
        color: "#5a4a4a",
        textAlign: "center",
        marginTop: 1,
    },

    mainSection: {
        backgroundColor: "#ffffff",
        padding: 22,
        borderRadius: 8,
        marginBottom: 20,
    },
    mainTitulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#2c1810",
        marginBottom: 14,
        textTransform: "uppercase",
        letterSpacing: 1,
        textAlign: "center",
    },
    barraProgressoRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    barraLabel: {
        fontSize: 9,
        fontWeight: "bold",
        color: "#3d2c2c",
        width: 100,
    },
    barraValor: {
        fontSize: 9,
        fontWeight: "bold",
        color: "#3d2c2c",
        width: 30,
        textAlign: "right",
        marginRight: 6,
    },
    barraFundo: {
        flex: 1,
        height: 6,
        backgroundColor: "#e8e2d9",
        borderRadius: 7,
        overflow: "hidden",
    },
    barraPreenchimento: {
        height: 6,
        borderRadius: 7,
    },

    meioRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    quadradoMeio: {
        width: "48%",
        backgroundColor: "#ffffff",
        padding: 16,
        borderRadius: 4,
    },
    quadradoMeioTitulo: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#2c1810",
        marginBottom: 6,
    },
    quadradoMeioTexto: {
        fontSize: 9,
        color: "#5a4a4a",
        lineHeight: 1.5,
        marginBottom: 10,
    },
    imagemBoxMeio: {
        width: "100%",
        height: 90,
        backgroundColor: "#e2e8f0",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    imagemMeio: {
        width: 50,
        height: 50,
        objectFit: "contain",
    },

    retangulo: {
        backgroundColor: "#e2e8f0",
        padding: 16,
        borderRadius: 8,
        marginBottom: 20,
    },
    retanguloTitulo: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#2c1810",
        marginBottom: 5,
    },
    retanguloTexto: {
        fontSize: 9,
        color: "#4a3a3a",
        lineHeight: 1.5,
    },

    footer: {
        backgroundColor: "#e2e8f0",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
    },
    footerTexto: {
        fontSize: 9,
        color: "#262727",
        textAlign: "center",
        lineHeight: 1.5,
    },
});

export default function ModeloPDF2() {
    return (
        <Document>
            <Page size="A4" style={estilos.pagina}>
                <View style={estilos.topoRow}>
                    <View style={estilos.cardTopoEsquerdo}>
                        <View style={estilos.gridItens}>
                            <View style={estilos.quadradoItem}>
                                <Image src="/selecoes/holanda.png" style={estilos.imagemQuadradinho} />
                            </View>
                            <View style={estilos.quadradoItem}>
                                <Image src="/selecoes/franca.png" style={estilos.imagemQuadradinho} />
                            </View>
                            <View style={estilos.quadradoItem}>
                                <Image src="/selecoes/espanha.png" style={estilos.imagemQuadradinho} />
                            </View>
                            <View style={estilos.quadradoItem}>
                                <Image src="/selecoes/holanda.png" style={estilos.imagemQuadradinho} />
                            </View>
                        </View>
                    </View>

                    <View style={estilos.cardTopoDireito}>
                        <Text style={estilos.tituloCirculos}>Maiores Campeões</Text>
                        <View style={estilos.circulosContainer}>
                            <View style={estilos.circuloWrapper}>
                                <View style={estilos.circulo}>
                                    <Image src="/selecoes/holanda.png" style={estilos.logoImagem} />
                                </View>
                                <Text style={estilos.qtdTitulo}>4</Text>
                                <Text style={estilos.nomeSelecao}>Holanda</Text>
                            </View>
                            <View style={estilos.circuloWrapper}>
                                <View style={estilos.circulo}>
                                    <Image src="/selecoes/franca.png" style={estilos.logoImagem} />
                                </View>
                                <Text style={estilos.qtdTitulo}>2</Text>
                                <Text style={estilos.nomeSelecao}>França</Text>
                            </View>
                            <View style={estilos.circuloWrapper}>
                                <View style={estilos.circulo}>
                                    <Image src="/selecoes/espanha.png" style={estilos.logoImagem} />
                                </View>
                                <Text style={estilos.qtdTitulo}>1</Text>
                                <Text style={estilos.nomeSelecao}>Espanha</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={estilos.mainSection}>
                    <Text style={estilos.mainTitulo}>Estatísticas da Partida</Text>

                    <View style={estilos.barraProgressoRow}>
                        <Text style={estilos.barraLabel}>Aproveitamento</Text>
                        <Text style={estilos.barraValor}>87%</Text>
                        <View style={estilos.barraFundo}>
                            <View style={[estilos.barraPreenchimento, { width: "87%", backgroundColor: "#252525" }]} />
                        </View>
                    </View>

                    <View style={estilos.barraProgressoRow}>
                        <Text style={estilos.barraLabel}>Posse de Bola</Text>
                        <Text style={estilos.barraValor}>65%</Text>
                        <View style={estilos.barraFundo}>
                            <View style={[estilos.barraPreenchimento, { width: "65%", backgroundColor: "#252525" }]} />
                        </View>
                    </View>

                    <View style={estilos.barraProgressoRow}>
                        <Text style={estilos.barraLabel}>Finalizações</Text>
                        <Text style={estilos.barraValor}>73%</Text>
                        <View style={estilos.barraFundo}>
                            <View style={[estilos.barraPreenchimento, { width: "73%", backgroundColor: "#252525" }]} />
                        </View>
                    </View>

                    <View style={estilos.barraProgressoRow}>
                        <Text style={estilos.barraLabel}>Passes Certos</Text>
                        <Text style={estilos.barraValor}>91%</Text>
                        <View style={estilos.barraFundo}>
                            <View style={[estilos.barraPreenchimento, { width: "91%", backgroundColor: "#252525" }]} />
                        </View>
                    </View>

                    <View style={estilos.barraProgressoRow}>
                        <Text style={estilos.barraLabel}>Defesas</Text>
                        <Text style={estilos.barraValor}>58%</Text>
                        <View style={estilos.barraFundo}>
                            <View style={[estilos.barraPreenchimento, { width: "58%", backgroundColor: "#252525" }]} />
                        </View>
                    </View>
                </View>

                <View style={estilos.meioRow}>
                    <View style={estilos.quadradoMeio}>
                        <Text style={estilos.quadradoMeioTitulo}>Tática e Estratégia</Text>
                        <Text style={estilos.quadradoMeioTexto}>
                            Esquema tático 4-3-3 com linhas compactas e transição rápida.
                            Pressão alta na saída de bola adversária e construção organizada.
                        </Text>
                        <View style={estilos.imagemBoxMeio}>
                            <Image src="/selecoes/holanda.png" style={estilos.imagemMeio} />
                        </View>
                    </View>
                    <View style={estilos.quadradoMeio}>
                        <Text style={estilos.quadradoMeioTitulo}>Elenco e Preparação</Text>
                        <Text style={estilos.quadradoMeioTexto}>
                            Grupo experiente com média de idade de 26 anos. Comissão técnica
                            multidisciplinar focada em desempenho e recuperação.
                        </Text>
                        <View style={estilos.imagemBoxMeio}>
                            <Image src="/selecoes/franca.png" style={estilos.imagemMeio} />
                        </View>
                    </View>
                </View>

                <View style={estilos.retangulo}>
                    <Text style={estilos.retanguloTitulo}>Desempenho Geral</Text>
                    <Text style={estilos.retanguloTexto}>
                        <Text style={{ fontWeight: "bold" }}>Holanda:</Text>desempenho sólido, com destaque para
                        a defesa e transições rápidas. Pontos fortes na organização tática e experiência do elenco.

                        <Text style={{ fontWeight: "bold" }}>França:</Text>equipe equilibrada, com bom controle de bola
                        e capacidade de finalização. Destaque para a comissão técnica e preparação física.
                        <Text style={{ fontWeight: "bold" }}>Espanha:</Text> desempenho consistente, com ênfase na posse de bola
                        e construção de jogadas. Pontos fortes na técnica individual e coesão do grupo.
                    </Text>
                </View>

                <View style={estilos.footer}>
                    <Text style={estilos.footerTexto}>
                        contato@cbf.com.br • (35) 9 9242-8787 • Minas Gerais, MG
                        2026 Time Esportivo Ltda. Todos os direitos reservados.
                    </Text>
                </View>
            </Page>
        </Document>
    );
}
