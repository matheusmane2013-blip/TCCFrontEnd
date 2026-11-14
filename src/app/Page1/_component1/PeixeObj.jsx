export default function Peixeobj({ imagem, morto }) {
    return (
        <img 
            src={imagem} 
            alt="Peixe no Aquário" 
            className={`w-24 h-24 object-contain transition-transform ${
                morto 
                    ? 'animate-bounce opacity-80' // Morto: Tira a natação e bota o bounce
                    : 'animacao-nadar'              // Vivo: Usa a sua animação personalizada
            }`}
        />
    );
}