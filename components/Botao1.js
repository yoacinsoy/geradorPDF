'use client'
import dynamic from 'next/dynamic';
import Curriculo1 from './curriculo1';
import Curriculo2 from './curriculo2';
import Curriculo3 from './curriculo3';
import ModeloPDF2 from './modeloPDF2';

const PDFDownloadLink = dynamic(
    () =>
        import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    { ssr: false }
);

export default function BotaoBase() {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <PDFDownloadLink
                document={<Curriculo1 />}
                fileName="curriculo_wallace.pdf"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#252525',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                }}
            >
                {({ loading }) => loading ? 'Gerando PDF...' : 'Baixar Currículo 1'
                }
            </PDFDownloadLink>
            <PDFDownloadLink
                document={<Curriculo2 />}
                fileName="curriculo_wallace.pdf"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#252525',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                }}
            >
                {({ loading }) => loading ? 'Gerando PDF...' : 'Baixar Currículo 2'
                }
            </PDFDownloadLink>
            <PDFDownloadLink
                document={<Curriculo3 />}
                fileName="curriculo_wallace.pdf"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#252525',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                }}
            >
                {({ loading }) => loading ? 'Gerando PDF...' : 'Baixar Currículo 3'
                }
            </PDFDownloadLink>

            <PDFDownloadLink
                document={<ModeloPDF2 />}
                fileName="modelo_elementos_graficos.pdf"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#252525',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s',
                }}
            >
                {({ loading }) => loading ? 'Abrindo elemento grafico...' : 'Abrir elementos graficos'
                }
            </PDFDownloadLink>
        </div>
    );
}
