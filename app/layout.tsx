import '@/styles/dist.css';
import React from 'react';
import Navbar from '../shared/Navbar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className='bg-zinc-700'>
        <div className="grid grid-cols-[1fr, 1fr] gap-x-8 py-8 grid-rows-3">
         
          <div className="rounded-xl border border-zinc-800 bg-black p-8">
            <Navbar />
            {children}</div>
        </div>
        
      </body>
    </html>
  );
}
