export default function Form() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-zinc-600">Preencha seus dados</h1>
            <form className="bg-white p-6 rounded shadow-md w-screen mx-4 md:w-1/2 lg:w-1/2">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="nome">
                        Nome
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        id="nome"
                        type="text"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded"
                        id="email"
                        type="email"
                        placeholder="Digite seu email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="mensagem">
                        Mensagem
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded"
                        id="mensagem"
                        placeholder="Digite sua mensagem"
                    />
                </div>
            </form>
        </div>
    );
}
