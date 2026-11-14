import Link from 'next/link';

export default function Page() {
    return (
        <div className="p-6 max-w-4xl mx-auto flex flex-col gap-6 bg-[#f4f1ea] min-h-screen font-serif text-black relative">
            
            {/* Cabeçalho de Capa de Jornal */}
            <div className="border-b-4 border-black pb-4 text-center">
                <span className="text-xs font-sans uppercase tracking-widest bg-black text-white px-2 py-0.5">Suplemento Educativo • TCC Gazette</span>
                <h1 className="text-3xl font-black tracking-widest uppercase mt-2">Manual do Aquarista</h1>
                <p className="text-sm font-sans italic text-gray-700 mt-1">
                    &quot;Guia oficial de campo para a manutenção de ecossistemas aquáticos na vida real.&quot;
                </p>
            </div>

            {/* Conteúdo Educativo sobre Cuidados e Aquário Ideal */}
            <div className="flex flex-col gap-8 leading-relaxed pt-3">
                
                {/* Seção 1: O Aquário Ideal para Iniciantes */}
                <div className="relative border-4 border-black p-5 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-[-0.5deg]">
                    {/* Fita Adesiva */}
                    <div className="absolute -top-3 left-10 w-24 h-5 bg-yellow-200 opacity-80 border border-black/30 transform -rotate-2"></div>

                    <h3 className="text-lg font-black uppercase tracking-wider mb-3 text-black border-b-2 border-black pb-1">
                        1. O Aquário Ideal para Iniciantes
                    </h3>
                    <p className="mb-3 font-sans text-sm">
                        Muitos pensam que aquários pequenos (como os tradicionais globos de vidro) são fáceis de cuidar, mas na verdade é o oposto! Quanto menor o aquário, mais rápido os parâmetros da água desequilibram.
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-sm">
                        <li><strong>Tamanho recomendado:</strong> Um aquário retangular de <strong>50 a 80 litros</strong> é o ideal para começar. Ele oferece estabilidade térmica e química.</li>
                        <li><strong>Equipamentos essenciais:</strong> Filtro adequado (com mídias biológicas e mecânicas), termostato com aquecedor (para manter a temperatura estável) e iluminação básica.</li>
                        <li><strong>A ciclagem:</strong> Antes de colocar qualquer peixe, o aquário precisa passar pelo processo de ciclagem (geralmente de 2 a 4 semanas) para que as bactérias benéficas processem a amônia naturalmente.</li>
                    </ul>
                </div>

                {/* Seção 2: Cuidados Básicos com os Peixes */}
                <div className="relative border-4 border-black p-5 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-[0.5deg]">
                    {/* Fita Adesiva */}
                    <div className="absolute -top-3 right-12 w-24 h-5 bg-yellow-200 opacity-80 border border-black/30 transform rotate-2"></div>

                    <h3 className="text-lg font-black uppercase tracking-wider mb-3 text-black border-b-2 border-black pb-1">
                        2. Cuidados Diários e Semanais
                    </h3>
                    <p className="mb-3 font-sans text-sm">
                        Manter um aquário saudável exige rotina e atenção aos detalhes que você simulou no seu projeto:
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-sm">
                        <li><strong>Alimentação balanceada:</strong> Alimente os peixes apenas com o que eles conseguem comer em 2 a 3 minutos. Excesso de comida apodrece na água e gera picos perigosos de amônia.</li>
                        <li><strong>Testes de água:</strong> Monitore regularmente os níveis de amônia, pH, nitrito e temperatura para evitar estresse nos animais.</li>
                        <li><strong>TPAs (Trocas Parciais de Água):</strong> Semanalmente, troque de 20% a 30% da água do aquário por água nova tratada (livre de cloro), ajudando a controlar o acúmulo de compostos tóxicos.</li>
                    </ul>
                </div>

                {/* Seção 3: Curiosidades sobre as Espécies do Simulador */}
                <div className="relative border-4 border-black p-5 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-[-0.3deg]">
                    {/* Fita Adesiva */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-yellow-200 opacity-80 border border-black/30 transform rotate-1"></div>

                    <h3 className="text-lg font-black uppercase tracking-wider mb-3 text-black border-b-2 border-black pb-1">
                        3. Na Vida Real: Bandeiras e Corydoras
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="font-bold text-black uppercase text-xs font-sans mb-1">Peixe Bandeira (Angelfish)</h4>
                            <p className="text-xs font-sans text-gray-700">
                                São peixes de água doce amazônica que exigem pH levemente ácido e aquários mais altos, pois nadam bastante na vertical. São pacíficos, mas podem comer peixes muito pequenos.
                            </p>
                        </div>
                        <div className="p-3 bg-gray-50 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="font-bold text-black uppercase text-xs font-sans mb-1">Corydoras (Limpa-Fundo)</h4>
                            <p className="text-xs font-sans text-gray-700">
                                Conhecidos como peixes de fundo, adoram viver em cardumes e precisam de substrato não cortante (como areia fina) para não machucarem seus bigodes táteis enquanto procuram alimento.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Link de retorno estilizado como recorte */}
            <div className="pt-2">
                <Link href="./" className="inline-block px-4 py-2 bg-black text-white font-sans font-bold text-sm uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] hover:bg-gray-800 transition transform rotate-[0.5deg]">
                    ← Voltar para o Simulador
                </Link>
            </div>
        </div>
    );
}