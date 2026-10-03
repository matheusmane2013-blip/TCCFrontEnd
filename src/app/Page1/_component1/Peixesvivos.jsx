import PotedeRacao from './PotedeRacao';

export default function Peixesvivos() {
    return (
        <div className="w-fit h-fit bg-blue-500 rounded-lg p-3">
            <div className="flex justify-between items-center gap-4">
                <div className="flex flex-col items-center">
                    <img 
                      width="40" 
                      height="40" 
                      src="https://panoramapetvet.com.br/wp-content/uploads/2024/06/peixe-palhaaco-1.webp" 
                      alt="Peixe Palhaço"
                    />
                    <img 
                      className="w-12 h-12 animate-pulse" 
                      src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_corazón.svg/1280px-Heart_corazón.svg.png" 
                      alt="Coração"
                    />
                </div>
                <div>
                    <PotedeRacao />
                </div>
            </div>
        </div>
    );
}