export default function PainelControle({
  agua,
  temperaturaDirecao,
  podeMexerPh,
  podeMexerAmonia,
  podeMexerNitrito,
  podeMexerTemp,
  podeAlimentar,
  onMudarPh,
  onTratarAmonia,
  onTratarNitrito,
  onMudarTemperatura
}) {
  return (
    <div className="flex flex-row gap-6 items-start mt-2">
      <div className="relative w-[800px] border-4 border-black bg-white p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-[0.5deg] flex flex-col gap-4">
        
        {/* Fitas adesivas decorativas */}
        <div className="absolute -top-3 left-10 w-24 h-5 bg-yellow-200 opacity-80 border border-black/30 transform -rotate-2"></div>
        <div className="absolute -top-3 right-10 w-24 h-5 bg-yellow-200 opacity-80 border border-black/30 transform rotate-2"></div>

        <div className="border-b-2 border-black pb-2">
          <h2 className="font-black text-lg uppercase tracking-wider">Painel de Controle e Tratamento da Água</h2>
          <p className="text-xs font-sans text-gray-600">Ajuste os parâmetros com base nos relatórios de laboratório do jornal.</p>
        </div>
        
        {/* Linha do pH */}
        <div className="flex items-center justify-between border-b border-dashed border-gray-400 pb-2">
          <p className="font-bold">pH Atual: <span className="font-mono text-lg">{agua.ph}</span></p>
          <div className="flex gap-2">
            <button 
              onClick={() => onMudarPh(-0.1)}
              disabled={!podeMexerPh}
              className="px-3 py-1 bg-white border-2 border-black font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none disabled:opacity-50"
            >
              - 0.1 pH
            </button>
            <button 
              onClick={() => onMudarPh(0.1)}
              disabled={!podeMexerPh}
              className="px-3 py-1 bg-white border-2 border-black font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none disabled:opacity-50"
            >
              + 0.1 pH
            </button>
          </div>
        </div>

        {/* Linha da Amônia */}
        <div className="flex items-center justify-between border-b border-dashed border-gray-400 pb-2">
          <p className="font-bold">Amônia: <span className="font-mono text-lg">{agua.amonia} ppm</span></p>
          <button 
            onClick={onTratarAmonia}
            disabled={!podeMexerAmonia || agua.amonia <= 0}
            className="px-3 py-1 bg-black text-white border-2 border-black font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(100,100,100,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none disabled:opacity-50"
          >
            {podeMexerAmonia ? 'Acelerador Biológico 1' : 'Aplicando...'}
          </button>
        </div>

        {/* Linha do Nitrito */}
        <div className="flex items-center justify-between border-b border-dashed border-gray-400 pb-2">
          <p className="font-bold">Nitrito: <span className="font-mono text-lg text-orange-700">{agua.nitrito} ppm</span></p>
          <button 
            onClick={onTratarNitrito}
            disabled={!podeMexerNitrito || agua.nitrito <= 0}
            className="px-3 py-1 bg-black text-white border-2 border-black font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(100,100,100,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none disabled:opacity-50"
          >
            {podeMexerNitrito ? 'Acelerador Biológico 2' : 'Aplicando...'}
          </button>
        </div>
        
        {/* Linha da Temperatura */}
        <div className="flex items-center justify-between">
          <p className="font-bold">
            Temperatura: <span className="font-mono text-lg">{agua.temperatura}°C</span>{' '}
            {temperaturaDirecao && <span className="text-xs font-sans text-gray-600 font-normal">({temperaturaDirecao})</span>}
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => onMudarTemperatura(-0.5)}
              disabled={!podeMexerTemp}
              className="px-3 py-1 bg-white border-2 border-black font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none disabled:opacity-50"
            >
              - 0.5°C
            </button>
            <button 
              onClick={() => onMudarTemperatura(0.5)}
              disabled={!podeMexerTemp}
              className="px-3 py-1 bg-white border-2 border-black font-sans font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none disabled:opacity-50"
            >
              + 0.5°C
            </button>
          </div>
        </div>

        {!podeAlimentar && <span className="text-red-600 font-sans text-xs font-bold uppercase tracking-wide">⚠ Aguarde para alimentar novamente...</span>}
      </div>
    </div>
  );
}