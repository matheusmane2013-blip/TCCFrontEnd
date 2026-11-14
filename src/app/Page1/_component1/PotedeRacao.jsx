export default function PotedeRacao({ cooldown, onAlimentar }) {
    return (
        <div className="flex flex-col items-center gap-1 cursor-pointer group" onClick={!cooldown ? onAlimentar : undefined}>
            {/* Texto de Cooldown no lugar da amônia */}
            <span className={`text-xs font-bold px-2 py-0.5 rounded border border-black ${cooldown ? 'bg-red-200 text-red-800' : 'bg-white/90 text-black'}`}>
                {cooldown ? 'Aguarde...' : 'Pronto!'}
            </span>

            <img 
                width="40" 
                height="40" 
                src="https://images.tcdn.com.br/img/img_prod/682740/racao_para_peixes_de_fundo_alcon_bottom_fish_30g_3935_1_20201124140939.jpg" 
                alt="Pote de Ração"
                className={`transition-transform ${cooldown ? 'opacity-50 cursor-not-allowed' : 'group-hover:scale-110'}`}
            />
            <span className="text-[10px] text-gray-700 font-semibold">Alimentar</span>
        </div>
    );
}