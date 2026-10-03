import Peixesvivos from './Page1/_component1/Peixesvivos';
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Página 1</h1>
      <div className='flex gap-15'>
        <div className="m-5 w-300 h-80 bg-https://m.media-amazon.com/images/I/41VA7n6-lWL._UY250_SCLZZZZZZZ_.jpg flex border-4 border-black">

        </div>
        <div className='flex flex-col gap-10 flex-align-items'>
          <Peixesvivos />
          <Peixesvivos />
        </div>
      </div>
      <Link href="./Page2">Page2</Link>
    </div>
  );
}