import Image from "next/image";
import BotaoBase from "../components/Botao1";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-black font-sansbg-black">

            <div className="bg-[#151715] shadow-2xl shadow-white/20 rounded-lg flex flex-col items-center justify-center text-center p-10">
                <h1 className="text-4xl font-bold mb-4 text-center">
                    Gerador de PDF com React e Next.js
                </h1>
                <p className="text-lg mb-8 text-center">
                    Clique no botão abaixo para baixar um modelo de PDF gerado dinamicamente.
                </p>

                <div className="flex space-x-4">

                    <div className="flex flex-col items-center rounded-sm p-2">
                        <BotaoBase />
                    </div>

                </div>
            </div>
        </div>
    );
}
