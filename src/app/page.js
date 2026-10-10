import Peixesvivos from './Page1/_component1/Peixesvivos';
import Link from 'next/link';
import Foton from './Page1/_component1/foto.png';
import Peixeobj from './Page1/_component1/PeixeObj.jsx';
import Peixe1 from './Page1/_component1/peixe1.png';
import Peixe2 from './Page1/_component1/peixe2.png'

export default function Page() {
  return (
    <div className="p-6 max-w-7xl mx-auto flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Página 1</h1>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
        
        {/* Aquário Largo com os dois peixes dentro */}
        <div className="relative w-full max-w-[800px] h-80 border-4 border-black overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src={Foton.src} 
            alt="Cenário do Aquário" 
          />
          
          {/* Peixe 1: Recebe a imagem do peixe palhaço */}
          <div className="absolute bottom-1/16 left-1/2 -translate-x-1/2 z-10">
            <Peixeobj imagem={Peixe2.src} />
          </div>

          {/* Peixe 2: Recebe a imagem de outro peixe ou sprite diferente */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 z-10">
            <Peixeobj imagem={Peixe1.src} />
          </div>
        </div>
        
        {/* Coluna Direita (Peixes Vivos) */}
        <div className="flex flex-col gap-4">
          <Peixesvivos />
          <Peixesvivos />
        </div>

      </div>

      {/* Seção dos dois quadrados pretos abaixo */}
      <div className="flex flex-row gap-6 items-start">
        <div className="w-[800px] h-40 border-4 border-black"></div>
      </div>

      {/* Barra Inferior */}
      <div className="w-full max-w-[1216px] h-24 border-8 border-black"></div>

      <Link href="./Page2" className="inline-block text-blue-600 underline">
        Page2
      </Link>
    </div>
  );
}