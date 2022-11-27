'use client'
import Image from 'next/image'

import Link from 'next/link'

export default function Client(){

    return(
        <div className="space-y-8 text-white">
            <Link href='/'>HOME PAGE</Link>
            <h1>Client Page</h1>
            <Image src='/images/image1.jpg' unoptimized width={350} height={250} alt='slika1'/>
        </div>
    )
}