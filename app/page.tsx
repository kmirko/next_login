import { demos } from '@/lib/demos';
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
      </div>
    </div>
  );
}
