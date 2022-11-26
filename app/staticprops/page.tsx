import Link from 'next/link'

export default function StaticProps(){
    return(
        <div className="space-y-8 text-white">
            <Link href='/'>HOME PAGE</Link>
            <h1>StaticProps Page</h1>
        </div>
    )
}