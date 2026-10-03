import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <div>
                <h1>Página 2</h1>
            </div>
            <div>
                <Link href="../">Page2</Link>
            </div>
        </div>
    );
}