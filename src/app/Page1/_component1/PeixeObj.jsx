export default function Peixeobj({ imagem }) {
    return (
        <div className="w-20 h-20 animacao-nadar">
            <img 
                src={imagem} 
                alt="Peixe Nadando" 
                className="w-full h-full object-contain"
            />
        </div>
    );
}