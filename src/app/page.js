import Peixesvivos from './Page1/_component1/Peixesvivos';
import Link from 'next/link'
import Foton from './Page1/_component1/foto.png'
export default function Page() {
  return (
    <div>
      <h1>Página 1</h1>
      <div className='flex gap-15 flex-row'>
        <div className="m-5 w-300 h-80 flex border-4 border-black">
          <img className='w-full h-full object-cover' src={Foton.src} alt="Foto"></img>
        </div>

        <div className='flex flex-col gap-10 items-center place-items-center'>
          <div className='flex flex-col gap-10'>
            <Peixesvivos />
            <Peixesvivos />
          </div>

          <div className='flex w-60 h-60 border-4 border-black order-2  order-2 '>

          </div>
        </div>
      </div>
      <div className='flex gap-150 flex-row'>
        <div className='m-5 flex w-200 h-30 border-8 border-black order-1'>

        </div>

      </div>
      <Link href="./Page2">Page2</Link>
    </div>
  );
}