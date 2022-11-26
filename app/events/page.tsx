import Link from "next/link";

export default function Evants(){
    return(
        <div className="space-y-8 text-white">
            <h1>Events Page</h1>
            <Link href='/events/login'>LOGIN PAGE</Link>
        </div>
    )
}