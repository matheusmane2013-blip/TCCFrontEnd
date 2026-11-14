export default function Peixesvivos({ peixeData, onAlimentar, cooldown, imagem }) {
  return (
    <div className="w-full bg-[#dcd7cd] border-2 border-black p-3 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
      
      {/* Topo: Foto do Peixe + Estado de Cooldown */}
      <div className="flex items-center justify-between">
        <div className="w-12 h-10 border-2 border-black bg-white flex items-center justify-center overflow-hidden transform -rotate-2">
          {imagem ? (
            <img src={imagem} alt="Peixe" className="w-full h-full object-contain p-0.5" />
          ) : (
            <span className="text-[10px] text-gray-500">Sem Foto</span>
          )}
        </div>

        <span className={`px-2 py-0.5 text-xs font-sans font-bold border border-black ${
          cooldown ? 'bg-gray-300 text-gray-700' : 'bg-white text-black'
        }`}>
          {cooldown ? 'Aguarde...' : 'Pronto!'}
        </span>
      </div>

      {/* Meio: Vida (Arredondada) e Botão de Alimentar */}
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1.5">
          <span className="text-red-600 text-lg">♥</span>
          <span className="font-sans font-bold text-sm">
            Vida: {Math.round(peixeData?.saude ?? 100)}%
          </span>
        </div>

        <button
          onClick={onAlimentar}
          disabled={cooldown || peixeData?.saude <= 0}
          className="px-3 py-1 bg-black text-white font-sans font-bold text-xs uppercase border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-800 disabled:opacity-50 active:translate-x-0.5 active:translate-y-0.5"
        >
          Alimentar
        </button>
      </div>

    </div>
  );
}