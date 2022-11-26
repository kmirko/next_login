import Link from "next/link";
import posts from '../../../posts/data.json'

export default function Login(){
    return(
        <div className="space-y-8 text-white">
            <h1>Events Page</h1>
            {posts.map(p=>(
                <h3 key={p.id}>{p.name}</h3>
            ))}
            <Link href='/'>HOME</Link>
        </div>
    )
}