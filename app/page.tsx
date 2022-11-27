import { demos } from '@/lib/demos';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='space-y-6'>
      <div className="space-y-8 text-white">
      <h1 className='text-xl'>Samo ovo je Page</h1>
      {demos.filter(section=>
        section.items.some(x=>typeof x.isDisabled === 'undefined')
        ).map(section=>{
          return(
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {section.name}
            </div>

          )
        })}
      

      <Image
        src="/images/image1.jpg"
        unoptimized
        alt="Next.js Hoodie"
        width={500}
        height={90}
      />
       
        <Link href='/events'>EVENTS PAGE</Link>
      </div>
    </div>
  );
}
