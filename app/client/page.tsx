'use client'

import Link from 'next/link'

export default function Client(){

    return(
        <div className="space-y-8 text-white">
            <Link href='/'>HOME PAGE</Link>
            <h1>Client Page</h1>
        </div>
    )
}